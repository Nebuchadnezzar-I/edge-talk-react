import { VITE_SUPABASE_KEY, VITE_SUPABASE_URL } from '../config';
import { createClient } from "@supabase/supabase-js";
import React, { useEffect, useState } from 'react';
import { SidebarProvider, SidebarTrigger } from '../components/ui/sidebar';
import { AppSidebar } from '../components/ui/app-sidebar';
import { ModeToggle } from '../components/custom/mode-toggle';
import { AIToggle } from '../components/custom/ai-toggle';
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import NewNegotiation from '../components/custom/new-negotiation';

import { Card, CardDescription, CardHeader, CardTitle } from "../components/ui/card"

const supabase = createClient(VITE_SUPABASE_URL, VITE_SUPABASE_KEY);

type Country = {
    id: number;
    name: string;
};

export default function Dashboard() {
    const [countries, setCountries] = useState<Country[]>([]);

    useEffect(() => {
        getCountries();
    }, []);

    async function getCountries() {
        const { data } = await supabase.from("countries").select();
        if (!data) {
            const data = [];
            setCountries(data);
        }

        setCountries(data as Country[]);
    }

    return (
        <SidebarProvider>
            <AppSidebar />
            <main className='p-3 w-full'>
                <AppNavigation />
                <div className='home-content-height overflow-y-auto'>
                    {
                        Array.from({ length: 10 }).map(() => (
                            <Card className='flex items-center my-3 mr-3'>
                                <CardHeader>
                                    <CardTitle>
                                        <a href={`/n/${Math.floor(Math.random() * 100000)}`} className='hover:underline'>#191-991</a>
                                    </CardTitle>
                                    <CardDescription>Car payment</CardDescription>

                                    {/* TODO: Add content */}
                                </CardHeader>
                            </Card>
                        ))
                    }

                    {/*<div>
                        <ul>
                            {countries.map((country) => (
                                <li key={country.name}>{country.name}</li>
                            ))}
                        </ul>
                    </div>*/}
                </div>
            </main>
        </SidebarProvider>
    )
};

export function AppNavigation() {
    return (
        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-3'>
                <SidebarTrigger />
                <NewNegotiation />
                <AIToggle />
            </div>
            <div className='flex items-center gap-3'>
                <ModeToggle />
                <Avatar className='w-[2rem] h-[2rem]'>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
        </div>
    );
}
