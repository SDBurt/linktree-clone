import '../styles/globals.css'
import cn from 'classnames'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    const backgroundGradient = "bg-gradient-to-r from-teal-200 to-lime-200"
    
    return (
        <html lang="en">
            <body className={cn(backgroundGradient)}>{children}</body>
        </html>
    );
}