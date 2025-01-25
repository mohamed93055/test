import { about, facts, skills, resume, portfolioData } from "@/data/data";

export async function GET(
  _request: Request,
  {
    params,
  }: {
    params: {
      name: Promise<string>;
    };
  }
) {
  switch ((await params).name.toString()) {
    case "about":
      return Response.json(about);
      break;
    case "facts":
      return Response.json(facts);
      break;
    case "skills":
      return Response.json(skills);
      break;
    case "resume":
      return Response.json(resume);
      break;
    case "portfolio":
      return Response.json(portfolioData);
      break;
    default:
      break;
  }
}
