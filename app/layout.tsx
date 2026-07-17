import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Ideal Smiles Dental | Staten Island", description: "Modern dentistry. Thoughtful care. Ideal Smiles Dental in Staten Island.", alternates:{canonical:"https://idealsmilesdental.com"}, openGraph:{title:"Ideal Smiles Dental",description:"Modern dentistry. Thoughtful care.",type:"website",images:[{url:"/og.png",width:1200,height:630,alt:"Ideal Smiles Dental"}]}, twitter:{card:"summary_large_image",title:"Ideal Smiles Dental",description:"Modern dentistry. Thoughtful care.",images:["/og.png"]} };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
