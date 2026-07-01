import { AuthProvider } from "@/shared/context/AuthContext";
import { SchoolBrandProvider } from "@/shared/context/SchoolBrandContext";
import { fetchSchool } from "@/features/school/fetchSchool";

export default async function LoginEntryLayout({ children }: { children: React.ReactNode }) {
  const school = await fetchSchool();
  const brand = { schoolName: school.schoolName, accentColor: school.accentColor, logoUrl: school.logoUrl };

  return (
    <AuthProvider>
      <SchoolBrandProvider brand={brand}>{children}</SchoolBrandProvider>
    </AuthProvider>
  );
}
