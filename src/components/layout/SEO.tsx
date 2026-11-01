import { Helmet } from "react-helmet-async";

const SITE_URL = "https://chella-g.github.io/Blog";

interface SEOProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
  publishedAt?: string;
  author?: string;
  tags?: string[];
}

export const SEO = ({
  title,
  description,
  path,
  image,
  type = "website",
  publishedAt,
  author,
  tags = [],
}: SEOProps) => {
  const canonical = `${SITE_URL}${path}`;
  const imageUrl = image ? `${SITE_URL}${image}` : `${SITE_URL}/favicon.svg`;
  const structuredData = type === "article"
    ? {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: title,
        description,
        url: canonical,
        datePublished: publishedAt,
        author: { "@type": "Person", name: author || "Anony" },
        publisher: { "@type": "Person", name: "Anony.blog" },
        image: imageUrl,
        keywords: tags.join(", "),
        mainEntityOfPage: canonical,
      }
    : undefined;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index,follow,max-image-preview:large" />
      <link rel="canonical" href={canonical} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Anony.blog | Developer Blog" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={imageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      {structuredData && (
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      )}
    </Helmet>
  );
};
