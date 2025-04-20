'use client'

import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
	Calendar,
	Edit,
	LogOut,
	Mail,
	MessageSquare,
	MoreHorizontal,
	Settings,
	Share,
	Trash,
	User,
} from 'lucide-react'
import Link from 'next/link'

export default function ProfilePage() {
	return (
		<div className='container mx-auto pt-20 px-4 md:px-6'>
			<Card className='max-w-4xl mx-auto'>
				<CardHeader className='relative pb-0'>
					<div className='absolute right-6 top-6'>
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button variant='ghost' size='icon'>
									<MoreHorizontal className='h-5 w-5' />
									<span className='sr-only'>
										Profile options
									</span>
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent align='end'>
								<DropdownMenuLabel>
									Profile Actions
								</DropdownMenuLabel>
								<DropdownMenuSeparator />
								<DropdownMenuItem>
									<Edit className='mr-2 h-4 w-4' />
									<span>Edit Profile</span>
								</DropdownMenuItem>
								<DropdownMenuItem>
									<Share className='mr-2 h-4 w-4' />
									<span>Share Profile</span>
								</DropdownMenuItem>
								<DropdownMenuItem>
									<Settings className='mr-2 h-4 w-4' />
									<span>Settings</span>
								</DropdownMenuItem>
								<DropdownMenuSeparator />
								<DropdownMenuItem className='text-destructive'>
									<Trash className='mr-2 h-4 w-4' />
									<span>Delete Account</span>
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</div>
					<div className='flex flex-col md:flex-row gap-4 items-start md:items-center'>
						<Avatar className='h-20 w-20 border-4 border-background'>
							<AvatarImage
								src='/placeholder.svg?height=80&width=80'
								alt='Alex Johnson'
							/>
						</Avatar>
						<div>
							<div className='flex items-center gap-2'>
								<CardTitle className='text-2xl'>
									Alex Johnson
								</CardTitle>
								<Badge>Pro Member</Badge>
							</div>
							<CardDescription className='text-base mt-1'>
								Product Designer • San Francisco, CA
							</CardDescription>
							<div className='flex gap-2 mt-2'>
								<Button size='sm' variant='outline'>
									<User className='mr-2 h-4 w-4' />
									Follow
								</Button>
								<Button size='sm' variant='outline'>
									<MessageSquare className='mr-2 h-4 w-4' />
									Message
								</Button>
							</div>
						</div>
					</div>
				</CardHeader>
				<CardContent className='pt-6'>
					<Tabs defaultValue='about'>
						<TabsList className='mb-4 flex flex-wrap md:flex-nowrap overflow-x-auto gap-2 scrollbar-hide'>
							<TabsTrigger value='about'>Haqida</TabsTrigger>
							<TabsTrigger value='posts'>Tashriflar</TabsTrigger>
							<TabsTrigger value='photos'>Baholar</TabsTrigger>
							<TabsTrigger value='friends'>Do‘stlar</TabsTrigger>
						</TabsList>

						<TabsContent value='about'>
							<div className='space-y-4'>
								<div>
									<h3 className='font-medium text-lg'>Bio</h3>
									<p className='text-muted-foreground mt-1'>
										Product designer with over 8 years of
										experience in creating user-centered
										digital products. Passionate about
										solving complex problems through design
										thinking and collaboration.
									</p>
								</div>
								<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
									<div>
										<h3 className='font-medium text-lg'>
											Contact Information
										</h3>
										<ul className='mt-2 space-y-2'>
											<li className='flex items-center'>
												<Mail className='mr-2 h-4 w-4 text-muted-foreground' />
												<span>
													alex.johnson@example.com
												</span>
											</li>
											<li className='flex items-center'>
												<Calendar className='mr-2 h-4 w-4 text-muted-foreground' />
												<span>Joined January 2020</span>
											</li>
										</ul>
									</div>
									<div>
										<h3 className='font-medium text-lg'>
											Skills
										</h3>
										<div className='flex flex-wrap gap-2 mt-2'>
											<Badge variant='secondary'>
												UI Design
											</Badge>
											<Badge variant='secondary'>
												UX Research
											</Badge>
											<Badge variant='secondary'>
												Prototyping
											</Badge>
											<Badge variant='secondary'>
												Figma
											</Badge>
											<Badge variant='secondary'>
												Design Systems
											</Badge>
										</div>
									</div>
								</div>
							</div>
						</TabsContent>
						<TabsContent value='posts'>
							<div className='text-center py-10'>
								<p className='text-muted-foreground'>
									No posts to display yet.
								</p>
							</div>
						</TabsContent>
						<TabsContent value='photos'>
							<div className='text-center py-10'>
								<p className='text-muted-foreground'>
									No photos to display yet.
								</p>
							</div>
						</TabsContent>
						<TabsContent value='friends'>
							<div className='text-center py-10'>
								<p className='text-muted-foreground'>
									No friends to display yet.
								</p>
							</div>
						</TabsContent>
					</Tabs>
				</CardContent>
				<CardFooter className='border-t pt-6 flex flex-col sm:flex-row gap-3 sm:justify-between'>
					<Button variant='outline' className='w-full sm:w-auto'>
						<Settings className='mr-2 h-4 w-4' />
						Account Settings
					</Button>
					<Link href={'/login'}>
						<Button
							variant='outline'
							className='w-full sm:w-auto text-destructive'
						>
							<LogOut className='mr-2 h-4 w-4' />
							Sign Out
						</Button>
					</Link>
				</CardFooter>
			</Card>
		</div>
	)
}
