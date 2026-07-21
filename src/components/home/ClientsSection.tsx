import { Container } from "@/components/ui/Container";
import { clients } from "@/data/clients";

export function ClientsSection() {
  return (
    <section className="border-y border-slate-200 bg-white py-3">
      <Container>
        <h2 className="mb-2 text-center text-sm font-black uppercase text-[#075FCB]">
          Empresas que confiam na VLN INFO
        </h2>
        <div
          className="grid grid-cols-2 items-center gap-x-8 gap-y-3 md:grid-cols-4 lg:grid-cols-7"
          aria-label="Lista de clientes"
        >
          {clients.map((client) => (
            <div key={client.name} className="flex min-h-10 items-center justify-center text-center">
              <span className={logoClass(client.name)}>{client.name}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function logoClass(name: string) {
  const base = "inline-flex items-center justify-center whitespace-nowrap font-black uppercase leading-none tracking-normal";
  switch (name) {
    case "Positivo":
      return `${base} text-[22px] text-[#13233b]`;
    case "CPTM":
      return `${base} text-[19px] text-[#263953] before:mr-2 before:inline-block before:size-4 before:rotate-45 before:border-4 before:border-[#263953] before:content-['']`;
    case "Unimed":
      return `${base} text-[19px] normal-case text-[#008542] after:ml-1 after:text-sm after:content-['+']`;
    case "Gocil":
      return `${base} text-[20px] text-[#5d6a77] before:mr-2 before:inline-block before:size-6 before:rounded-full before:border-[5px] before:border-[#6d7885] before:content-['']`;
    case "Lorenzetti":
      return `${base} skew-x-[-10deg] text-[19px] text-[#263953]`;
    case "Prodesp":
      return `${base} text-[18px] normal-case text-[#263953] before:mr-2 before:inline-block before:size-2 before:rounded-full before:bg-[#263953] before:shadow-[10px_-7px_0_#263953,10px_7px_0_#263953] before:content-['']`;
    default:
      return `${base} text-[11px] text-[#253244]`;
  }
}
