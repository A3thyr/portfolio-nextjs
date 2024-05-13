import { skillsData } from "@/lib/data";

export default function Skills() {
  return (
    <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
      {skillsData.map((skill, index) => (
        <li className="bg-white border rounded-xl px-5 py-3 " key={index}>
          {skill}
        </li>
      ))}
    </ul>
  );
}
