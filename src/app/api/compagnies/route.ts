import { NextResponse } from "next/server";

const compagnies = [
  {
    nom: "Taroudant",
    region: "Agadir",
  },
  {
    nom: "Inezgane",
    region: "Agadir",
  },
  {
    nom: "Bensliman",
    region: "Rabat",
  },
];

export const GET = async (request: any) => {
  return NextResponse.json(compagnies);
};

export default compagnies;
