import { useRef } from "react";
export default function TabSelector({
  items,
  active,
  onChange,
  label,
  prefix,
}: {
  items: { id: string; label: string }[];
  active: string;
  onChange: (id: string) => void;
  label: string;
  prefix: string;
}) {
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  return (
    <div className="tab-list" role="tablist" aria-label={label}>
      {items.map((item, index) => (
        <button
          key={item.id}
          ref={(el) => {
            refs.current[index] = el;
          }}
          id={`${prefix}-tab-${item.id}`}
          role="tab"
          aria-selected={active === item.id}
          aria-controls={`${prefix}-panel-${item.id}`}
          tabIndex={active === item.id ? 0 : -1}
          onClick={() => onChange(item.id)}
          onKeyDown={(event) => {
            let next: number;
            if (event.key === "ArrowRight") next = (index + 1) % items.length;
            else if (event.key === "ArrowLeft")
              next = (index - 1 + items.length) % items.length;
            else if (event.key === "Home") next = 0;
            else if (event.key === "End") next = items.length - 1;
            else return;
            event.preventDefault();
            onChange(items[next].id);
            refs.current[next]?.focus();
          }}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
