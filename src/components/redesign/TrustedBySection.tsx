export const TrustedBySection = () => {
  // Placeholder para logos - você pode substituir por logos reais depois
  const clientLogos = [
    { name: "Cliente 1", placeholder: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=200&h=100&fit=crop&q=80" },
    { name: "Cliente 2", placeholder: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=200&h=100&fit=crop&q=80" },
    { name: "Cliente 3", placeholder: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=200&h=100&fit=crop&q=80" },
    { name: "Cliente 4", placeholder: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=200&h=100&fit=crop&q=80" },
    { name: "Cliente 5", placeholder: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=200&h=100&fit=crop&q=80" },
    { name: "Cliente 6", placeholder: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=200&h=100&fit=crop&q=80" },
  ];

  return (
    <section className="py-12 md:py-16 bg-[#0A0A0F]">
      <div className="container-custom max-w-[1200px]">
        <p className="text-center text-white/40 text-sm font-medium uppercase tracking-wider mb-8">
          Empresas que confiam na Limvex
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {clientLogos.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-16 rounded-xl border border-white/10 bg-white/[0.02] hover:border-white/20 transition-colors overflow-hidden"
            >
              <span className="text-white/30 text-xs font-medium">{client.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
