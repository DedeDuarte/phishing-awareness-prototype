import { useRef, useState, type FormEvent } from "react";
import { ArrowRight, CircleCheck } from "lucide-react";
import { ButtonLink } from "./ui";
type Field = "name" | "company" | "email" | "employees";
const fields: {
  id: Field;
  label: string;
  placeholder: string;
  type: string;
  autoComplete: string;
}[] = [
  {
    id: "name",
    label: "Nome",
    placeholder: "Como podemos chamar você?",
    type: "text",
    autoComplete: "name",
  },
  {
    id: "company",
    label: "Empresa",
    placeholder: "Nome da empresa",
    type: "text",
    autoComplete: "organization",
  },
  {
    id: "email",
    label: "E-mail corporativo",
    placeholder: "voce@empresa.com.br",
    type: "email",
    autoComplete: "email",
  },
];
export default function ContactForm() {
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [success, setSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const next: Partial<Record<Field, string>> = {};
    for (const field of ["name", "company", "email", "employees"] as Field[])
      if (!String(data.get(field) || "").trim())
        next[field] = "Preencha este campo para continuar.";
    const email = String(data.get("email") || "").trim();
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "Digite um endereço de e-mail válido.";
    setErrors(next);
    if (Object.keys(next).length) {
      form
        .querySelector<HTMLElement>(`[name="${Object.keys(next)[0]}"]`)
        ?.focus();
      return;
    }
    form.reset();
    setSuccess(true);
  }
  if (success)
    return (
      <div className="form-success" role="status">
        <span className="icon-box">
          <CircleCheck size={32} />
        </span>
        <h2>Demonstração concluída!</h2>
        <p>Esta é uma demonstração acadêmica; nenhuma mensagem foi enviada.</p>
        <p className="small-note">
          Os valores preenchidos foram descartados e não foram armazenados.
        </p>
        <ButtonLink to="/">Voltar à Home</ButtonLink>
        <button className="text-link" onClick={() => setSuccess(false)}>
          Testar o formulário novamente
        </button>
      </div>
    );
  return (
    <form className="contact-form" ref={formRef} onSubmit={submit} noValidate>
      <h2>Vamos começar uma conversa?</h2>
      <p className="small-note">
        Formulário demonstrativo. Use dados fictícios.
        <br />
        Campos com * são obrigatórios.
      </p>
      <div className="form-grid">
        {fields.map((field) => (
          <div
            className={field.id === "email" ? "full-width field" : "field"}
            key={field.id}
          >
            <label htmlFor={field.id}>{field.label} *</label>
            <input
              id={field.id}
              name={field.id}
              type={field.type}
              placeholder={field.placeholder}
              autoComplete={field.autoComplete}
              required
              maxLength={field.id === "email" ? 254 : 100}
              aria-invalid={!!errors[field.id]}
              aria-describedby={
                errors[field.id] ? `${field.id}-error` : undefined
              }
            />
            {errors[field.id] && (
              <span id={`${field.id}-error`} className="field-error">
                {errors[field.id]}
              </span>
            )}
          </div>
        ))}
        <div className="field full-width">
          <label htmlFor="employees">Quantidade de funcionários *</label>
          <select
            id="employees"
            name="employees"
            required
            defaultValue=""
            aria-invalid={!!errors.employees}
            aria-describedby={errors.employees ? "employees-error" : undefined}
          >
            <option value="" disabled>
              Selecione o tamanho da equipe
            </option>
            <option value="1-19">1 a 19</option>
            <option value="20-49">20 a 49</option>
            <option value="50-99">50 a 99</option>
            <option value="100-249">100 a 249</option>
            <option value="250+">250 ou mais</option>
          </select>
          {errors.employees && (
            <span id="employees-error" className="field-error">
              {errors.employees}
            </span>
          )}
        </div>
        <div className="field full-width">
          <label htmlFor="message">
            Mensagem <span>(opcional)</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            maxLength={1000}
            placeholder="O que sua equipe gostaria de aprender?"
          />
        </div>
      </div>
      {Object.keys(errors).length > 0 && (
        <p role="alert" className="field-error">
          Revise os campos indicados antes de continuar.
        </p>
      )}
      <button className="button button-primary" type="submit">
        Enviar solicitação fictícia
        <ArrowRight size={18} />
      </button>
      <p className="form-disclaimer">
        Nenhuma informação será enviada ou armazenada.
        <br />
        Este formulário simula apenas a experiência de contato.
      </p>
    </form>
  );
}
