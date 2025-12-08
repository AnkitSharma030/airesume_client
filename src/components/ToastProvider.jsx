'use client';
import { Toaster } from "react-hot-toast";

export default function ToastProvider() {
    return (
        <Toaster
            position="top-center"
            toastOptions={{
                duration: 3000,
                style: {
                    background: '#1e1e2e',
                    color: '#fff',
                    borderRadius: '12px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    padding: '16px',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
                },
                success: {
                    iconTheme: {
                        primary: '#10b981',
                        secondary: '#fff',
                    },
                },
                error: {
                    iconTheme: {
                        primary: '#ef4444',
                        secondary: '#fff',
                    },
                },
            }}
        />
    );
}
