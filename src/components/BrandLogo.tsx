import { ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { brand } from "../config/brand";

export default function BrandLogo() {
  return (
    <Link className="brand-logo" to="/" aria-label={`${brand.name} — início`}>
      <span className="brand-symbol">
        <ShieldCheck size={27} strokeWidth={1.8} aria-hidden="true" />
      </span>
      <span>
        {brand.name}
        <span className="brand-dot">.</span>
      </span>
    </Link>
  );
}
