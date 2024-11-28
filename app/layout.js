import "./globals.css";

export const metadata = {
    title: "Personal Dashboard",
    description: "A personal dashboard with widgets",
};

export default function RootLayout({children}) {
    return (
        <html lang="fr">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                {children}
            </body>
        </html>
    );
}
