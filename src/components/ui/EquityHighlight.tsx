import { cn } from "@/lib/utils";

export const EquityHighlight = () => {
  return (
    <div className="rounded-3xl border-4 border-primary bg-gradient-to-br from-primary/10 to-primary/5 p-8 md:p-10">
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-black text-foreground mb-6">
          Modelo de Investimento
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Investimento do Cliente */}
        <div className="bg-white rounded-2xl p-6 border-2 border-primary/20">
          <div className="text-sm font-semibold text-muted-foreground mb-2">
            Você investe
          </div>
          <div className="text-3xl md:text-4xl font-black text-primary mb-2">
            R$ 3.000
          </div>
          <div className="text-lg font-bold text-foreground mb-1">
            + 10x de R$ 500
          </div>
          <div className="text-sm text-muted-foreground">
            Entrada + parcelas mensais
          </div>
        </div>

        {/* Equity Limvex */}
        <div className="bg-white rounded-2xl p-6 border-2 border-primary/20">
          <div className="text-sm font-semibold text-muted-foreground mb-2">
            Limvex recebe
          </div>
          <div className="text-3xl md:text-4xl font-black text-primary mb-2">
            17,5%
          </div>
          <div className="text-lg font-bold text-foreground mb-1">
            de equity
          </div>
          <div className="text-sm text-muted-foreground">
            Participação societária
          </div>
        </div>
      </div>

      {/* Gráfico simples de investimento */}
      <div className="bg-white rounded-2xl p-6 border-2 border-primary/20">
        <div className="text-sm font-semibold text-muted-foreground mb-4 text-center">
          Comparativo de Investimento
        </div>
        <div className="space-y-4">
          {/* Barra Cliente */}
          <div>
            <div className="flex justify-between text-xs font-medium text-muted-foreground mb-1">
              <span>Cliente (R$ 8.000)</span>
              <span>35%</span>
            </div>
            <div className="h-6 bg-primary/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-primary rounded-full flex items-center justify-end pr-2"
                style={{ width: "35%" }}
              >
                <span className="text-xs font-bold text-white">R$ 8k</span>
              </div>
            </div>
          </div>

          {/* Barra Limvex */}
          <div>
            <div className="flex justify-between text-xs font-medium text-muted-foreground mb-1">
              <span>Limvex (Trabalho + Tech)</span>
              <span>65%</span>
            </div>
            <div className="h-6 bg-primary/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-primary/70 rounded-full flex items-center justify-end pr-2"
                style={{ width: "65%" }}
              >
                <span className="text-xs font-bold text-white">Trabalho</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="mt-6 bg-white rounded-2xl p-6 border-2 border-primary/20">
        <div className="text-sm font-semibold text-muted-foreground mb-4 text-center">
          Timeline do MVP
        </div>
        <div className="flex items-center justify-between">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((week) => (
            <div key={week} className="flex flex-col items-center">
              <div
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold mb-1",
                  week <= 4
                    ? "bg-primary text-white"
                    : "bg-primary/20 text-primary"
                )}
              >
                {week}
              </div>
              <div className="text-xs text-muted-foreground">Sem</div>
            </div>
          ))}
        </div>
        <div className="mt-4 text-center text-sm font-medium text-foreground">
          Entrega: 4-8 semanas
        </div>
      </div>
    </div>
  );
};

