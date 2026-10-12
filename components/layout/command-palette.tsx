"use client";

import { useRouter } from "next/navigation";
import { useEffect, useId, useMemo, useRef, useState } from "react";

import { ArrowRight, ArrowUpRight, Search } from "@/components/ui/icons";
import { email, externalLinks, siteNavigation } from "@/content/links";
import { caseStudies, experiences } from "@/content/portfolio";
import { cn, slugify } from "@/lib/utils";

const OPEN_EVENT = "hgh:command-palette";

export function openCommandPalette() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

type Entry = {
  group: string;
  label: string;
  hint?: string;
  href: string;
  external?: boolean;
};

const entries: Entry[] = [
  { group: "Pages", label: "Accueil", href: "/" },
  ...siteNavigation.map((item) => ({
    group: "Pages",
    label: item.label,
    href: item.href,
  })),
  { group: "Pages", label: "Contact", href: "/contact" },
  ...experiences.map((item) => ({
    group: "Expériences",
    label: item.company,
    hint: item.role,
    href: `/experience#${slugify(item.company)}`,
  })),
  ...caseStudies.map((item, index) => ({
    group: "Cas concrets",
    label: item.title,
    hint: item.eyebrow,
    href: `/projects#cas-0${index + 1}`,
  })),
  {
    group: "Liens",
    label: email.label,
    hint: email.address,
    href: email.href,
  },
  ...Object.values(externalLinks).map((link) => ({
    group: "Liens",
    label: link.label,
    hint: link.handle,
    href: link.href,
    external: true,
  })),
];

function normalize(value: string) {
  return value.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
}

export function CommandPalette() {
  const router = useRouter();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listId = useId();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const results = useMemo(() => {
    const needle = normalize(query.trim());
    if (!needle) return entries;
    return entries.filter((entry) =>
      normalize(`${entry.label} ${entry.hint ?? ""} ${entry.group}`).includes(
        needle,
      ),
    );
  }, [query]);

  useEffect(() => {
    const show = () => {
      setQuery("");
      setActiveIndex(0);
      setOpen(true);
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        if (dialogRef.current?.open) {
          setOpen(false);
        } else {
          show();
        }
      }
    };

    window.addEventListener(OPEN_EVENT, show);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener(OPEN_EVENT, show);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) {
      dialog.showModal();
      inputRef.current?.focus();
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  const go = (entry: Entry) => {
    setOpen(false);
    if (entry.external) {
      window.open(entry.href, "_blank", "noopener,noreferrer");
    } else if (entry.href.startsWith("mailto:")) {
      window.location.href = entry.href;
    } else {
      router.push(entry.href);
    }
  };

  const onInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((index) => Math.min(index + 1, results.length - 1));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((index) => Math.max(index - 1, 0));
    } else if (event.key === "Enter" && results[activeIndex]) {
      event.preventDefault();
      go(results[activeIndex]);
    }
  };

  return (
    <dialog
      ref={dialogRef}
      aria-label="Navigation rapide"
      onClose={() => setOpen(false)}
      onClick={(event) => {
        if (event.target === dialogRef.current) setOpen(false);
      }}
      className="no-print bg-ink-2 fixed inset-x-0 top-[12vh] m-0 mx-auto w-[calc(100%-1.5rem)] max-w-xl overflow-hidden rounded-2xl border border-white/10 p-0 text-white shadow-[0_40px_120px_rgba(0,0,0,0.55)]"
    >
      <div className="flex items-center gap-3 border-b border-white/10 px-4">
        <Search className="shrink-0 text-lg text-white/40" />
        <input
          ref={inputRef}
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setActiveIndex(0);
          }}
          onKeyDown={onInputKeyDown}
          role="combobox"
          aria-expanded="true"
          aria-controls={listId}
          aria-activedescendant={
            results[activeIndex] ? `${listId}-${activeIndex}` : undefined
          }
          aria-label="Rechercher une page, une expérience ou un cas"
          placeholder="Aller à… (Parcours, Stago, SIL, GitHub)"
          className="h-14 w-full bg-transparent text-[15px] text-white outline-none placeholder:text-white/35"
        />
        <kbd className="hidden rounded-md border border-white/10 px-1.5 py-0.5 font-mono text-[10px] text-white/40 sm:block">
          Échap
        </kbd>
      </div>

      <ul
        id={listId}
        role="listbox"
        aria-label="Résultats"
        className="max-h-[min(60vh,420px)] overflow-y-auto p-2"
      >
        {results.length === 0 ? (
          <li className="px-3 py-8 text-center text-sm text-white/45">
            Aucun résultat pour « {query} ».
          </li>
        ) : null}
        {results.map((entry, index) => {
          const showGroup =
            index === 0 || results[index - 1].group !== entry.group;
          const active = index === activeIndex;

          return (
            <li key={entry.href} role="presentation">
              {showGroup ? (
                <p
                  aria-hidden="true"
                  className="px-3 pt-3 pb-1.5 font-mono text-[10px] tracking-[0.16em] text-white/35 uppercase"
                >
                  {entry.group}
                </p>
              ) : null}
              <div
                id={`${listId}-${index}`}
                role="option"
                aria-selected={active}
                onMouseMove={() => setActiveIndex(index)}
                onClick={() => go(entry)}
                className={cn(
                  "flex min-h-11 cursor-pointer items-center justify-between gap-4 rounded-xl px-3 py-2",
                  active ? "bg-white/[0.07]" : "",
                )}
              >
                <span className="min-w-0">
                  <span className="block truncate text-sm font-medium text-white">
                    {entry.label}
                  </span>
                  {entry.hint ? (
                    <span className="block truncate text-xs text-white/45">
                      {entry.hint}
                    </span>
                  ) : null}
                </span>
                {entry.external ? (
                  <ArrowUpRight
                    className={cn(
                      "shrink-0",
                      active ? "text-medical-bright" : "text-white/25",
                    )}
                  />
                ) : (
                  <ArrowRight
                    className={cn(
                      "shrink-0",
                      active ? "text-medical-bright" : "text-white/25",
                    )}
                  />
                )}
              </div>
            </li>
          );
        })}
      </ul>

      <div className="flex items-center gap-4 border-t border-white/10 px-4 py-2.5 font-mono text-[10px] text-white/35">
        <span>↑ ↓ naviguer</span>
        <span>Entrée ouvrir</span>
        <span>Échap fermer</span>
      </div>
    </dialog>
  );
}
