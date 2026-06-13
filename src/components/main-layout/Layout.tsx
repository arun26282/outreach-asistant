import MainHeader from "./MainHeader";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
            <MainHeader />

            <main className="flex-1 flex flex-col items-center justify-center p-6 sm:p-12">
                {children}
            </main>
        </div>
    );
}

export default Layout;