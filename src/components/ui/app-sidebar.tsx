import { Trash2 } from 'lucide-react';
import { Button } from './button';
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupLabel, SidebarHeader, SidebarMenuButton, SidebarMenuItem } from './sidebar';
import React from 'react';

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarHeader />
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Negotiation</SidebarGroupLabel>

                    {/* TODO: Fetch negotiations */}

                    <SidebarMenuButton asChild>
                        <a href="" className='flex justify-between items-center hover-list-element'>
                            <span>Car payment</span>
                            {/* TODO: Add modal */}
                            <Button className='w-6 h-6 opacity-0 transition-opacity duration-100' variant='destructive'>
                                <Trash2 />
                            </Button>
                        </a>
                    </SidebarMenuButton>

                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
    )
}
