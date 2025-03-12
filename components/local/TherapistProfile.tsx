"use client";
import Image from "next/image";
import { Separator } from "../ui/separator";



function splitBioIntoParagraphs(bioText: string) {
  const words = bioText.split(" ");
  let currentParagraph = "";
  const paragraphs = [];

  for (let i = 0; i < words.length; i++) {
    currentParagraph += words[i] + " ";
    if (currentParagraph.split(" ").length >= 100 && words[i].endsWith(".")) {
      paragraphs.push(currentParagraph);
      currentParagraph = "";
    }
  }

  // Add the remaining text as a last paragraph if it exists
  if (currentParagraph !== "") {
    paragraphs.push(currentParagraph);
  }

  return paragraphs;
}
export default function TherapistProfileModal({
  name,
  image,
  bio,
  tags,
}: {
  name: string;
  image: string;
  bio: string;
  tags: string[];
}) {
  const bioParagraphs = splitBioIntoParagraphs(bio);

  return (
    <div style={{ maxHeight: "70vh", overflowY: "auto" }}>
      <Image
        src={image}
        alt='Therapist'
        className='w-1/5 mr-4 rounded-full'
        style={{
          height: "200px",
          width: "200px",
          objectFit: "cover",
          float: "left",
          marginRight: "10px",
        }}
        width={200}
        height={200}
      />
      <div style={{ height: "100%" }}>
        <>
          <h2 className='text-2xl font-bold text-[#441890]'>{name}</h2>
          <div className='flex items-center gap-2 my-3'>
            {tags.map((tag, index) => (
              <span
                key={index}
                className='animate-pulse bg-[#e7e1fa] text-[#441890] text-[10px] font-nunito font-medium px-3 py-1 rounded-md'
              >
                {tag}
              </span>
            ))}
          </div>
          <Separator className='my-2 w-[90%] mx-auto' />
          {bioParagraphs.map((paragraph, index) => (
            <div key={index}>
              <p className="text-sm ">{paragraph}</p>
              {index !== bioParagraphs.length - 1 && (
                <div style={{ marginBottom: "1em" }} />
              )}
            </div>
          ))}{" "}
        </>
      </div>
    </div>
  );
}
