import orbit from "@/types/unions/orbit";

function collatzOrbitToCSV(collatzOrbit: orbit): string {
  return collatzOrbit.join("\n");
}

export default collatzOrbitToCSV;
