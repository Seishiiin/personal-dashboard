import { Poppins } from 'next/font/google';
import "./globals.css";

const globalNextFont = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

export const metadata = {
    title: "Personal Dashboard",
    description: "A personal dashboard with widgets",
};

export default function RootLayout({children}) {
    return (
        <html lang="fr">
            <body className={`${globalNextFont.className} m-0 p-0 antialiased`}>
                {children}
            </body>
        </html>
    );
}
