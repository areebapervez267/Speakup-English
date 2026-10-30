type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

/** Renders schema.org markup so search engines can build rich results. */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
