import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";

export default function BlogContent({ content }) {
  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        const { url, description } = node.data.target.fields.file;
        return (
          <div className="my-6">
            <Image
              src={`https:${url}`}
              alt={description || "Blog image"}
              width={800}
              height={500}
              className="mx-auto rounded-lg"
            />
          </div>
        );
      },
    },
  };

  return (
    <div className="mx-2">{documentToReactComponents(content, options)}</div>
  );
}
