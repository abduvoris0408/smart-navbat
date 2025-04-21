// 'use client'

// import { Avatar, AvatarImage } from '@/components/ui/avatar'
// import { Badge } from '@/components/ui/badge'
// import { Button } from '@/components/ui/button'
// import {
// 	Card,
// 	CardContent,
// 	CardDescription,
// 	CardFooter,
// 	CardHeader,
// 	CardTitle,
// } from '@/components/ui/card'
// import {
// 	DropdownMenu,
// 	DropdownMenuContent,
// 	DropdownMenuItem,
// 	DropdownMenuLabel,
// 	DropdownMenuSeparator,
// 	DropdownMenuTrigger,
// } from '@/components/ui/dropdown-menu'
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
// import {
// 	Calendar,
// 	Edit,
// 	LogOut,
// 	Mail,
// 	MessageSquare,
// 	MoreHorizontal,
// 	Settings,
// 	Share,
// 	Trash,
// 	User,
// } from 'lucide-react'
// import Link from 'next/link'

// export default function ProfilePage() {
// 	return (
// 		<div className='container mx-auto pt-20 px-4 md:px-6'>
// 			<Card className='max-w-4xl mx-auto'>
// 				<CardHeader className='relative pb-0'>
// 					<div className='absolute right-6 top-6'>
// 						<DropdownMenu>
// 							<DropdownMenuTrigger asChild>
// 								<Button variant='ghost' size='icon'>
// 									<MoreHorizontal className='h-5 w-5' />
// 									<span className='sr-only'>
// 										Profile options
// 									</span>
// 								</Button>
// 							</DropdownMenuTrigger>
// 							<DropdownMenuContent align='end'>
// 								<DropdownMenuLabel>
// 									Profile Actions
// 								</DropdownMenuLabel>
// 								<DropdownMenuSeparator />
// 								<DropdownMenuItem>
// 									<Edit className='mr-2 h-4 w-4' />
// 									<span>Edit Profile</span>
// 								</DropdownMenuItem>
// 								<DropdownMenuItem>
// 									<Share className='mr-2 h-4 w-4' />
// 									<span>Share Profile</span>
// 								</DropdownMenuItem>
// 								<DropdownMenuItem>
// 									<Settings className='mr-2 h-4 w-4' />
// 									<span>Settings</span>
// 								</DropdownMenuItem>
// 								<DropdownMenuSeparator />
// 								<DropdownMenuItem className='text-destructive'>
// 									<Trash className='mr-2 h-4 w-4' />
// 									<span>Delete Account</span>
// 								</DropdownMenuItem>
// 							</DropdownMenuContent>
// 						</DropdownMenu>
// 					</div>
// 					<div className='flex flex-col md:flex-row gap-4 items-start md:items-center'>
// 						<Avatar className='h-20 w-20 border-4 border-background'>
// 							<AvatarImage
// 								src='/placeholder.svg?height=80&width=80'
// 								alt='Alex Johnson'
// 							/>
// 						</Avatar>
// 						<div>
// 							<div className='flex items-center gap-2'>
// 								<CardTitle className='text-2xl'>
// 									Full Name
// 								</CardTitle>
// 								<Badge>Pro Member</Badge>
// 							</div>
// 							<CardDescription className='text-base mt-1'>
// 								Foydalanuvchi haqida ma`lumot
// 							</CardDescription>
// 							<div className='flex gap-2 mt-2'>
// 								<Button size='sm' variant='outline'>
// 									<User className='mr-2 h-4 w-4' />
// 									Follow
// 								</Button>
// 								<Button size='sm' variant='outline'>
// 									<MessageSquare className='mr-2 h-4 w-4' />
// 									Message
// 								</Button>
// 							</div>
// 						</div>
// 					</div>
// 				</CardHeader>
// 				<CardContent className='pt-6'>
// 					<Tabs defaultValue='about'>
// 						<TabsList className='mb-4 flex flex-wrap md:flex-nowrap overflow-x-auto gap-2 scrollbar-hide'>
// 							<TabsTrigger value='about'>Haqida</TabsTrigger>
// 							<TabsTrigger value='posts'>Tashriflar</TabsTrigger>
// 							<TabsTrigger value='photos'>Baholar</TabsTrigger>
// 							<TabsTrigger value='friends'>Do‘stlar</TabsTrigger>
// 						</TabsList>

// 						<TabsContent value='about'>
// 							<div className='space-y-4'>
// 								<div>
// 									<h3 className='font-medium text-lg'>
// 										Foydalanuvchi shaxsiy ma`lumotlari
// 									</h3>
// 									<p className='text-muted-foreground mt-1'>
// 										Foydalanuvchi tavsifi
// 									</p>
// 								</div>
// 								<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
// 									<div>
// 										<h3 className='font-medium text-lg'>
// 											Contact Information
// 										</h3>
// 										<ul className='mt-2 space-y-2'>
// 											<li className='flex items-center'>
// 												<Mail className='mr-2 h-4 w-4 text-muted-foreground' />
// 												<span>Email ma`lumotlari</span>
// 											</li>
// 											<li className='flex items-center'>
// 												<Calendar className='mr-2 h-4 w-4 text-muted-foreground' />
// 												<span>
// 													Foydalanuvchi qo`shilgan
// 													sana
// 												</span>
// 											</li>
// 										</ul>
// 									</div>
// 								</div>
// 							</div>
// 						</TabsContent>
// 						<TabsContent value='posts'>
// 							<div className='text-center py-10'>
// 								<p className='text-muted-foreground'>
// 									No posts to display yet.
// 								</p>
// 							</div>
// 						</TabsContent>
// 						<TabsContent value='photos'>
// 							<div className='text-center py-10'>
// 								<p className='text-muted-foreground'>
// 									No photos to display yet.
// 								</p>
// 							</div>
// 						</TabsContent>
// 						<TabsContent value='friends'>
// 							<div className='text-center py-10'>
// 								<p className='text-muted-foreground'>
// 									No friends to display yet.
// 								</p>
// 							</div>
// 						</TabsContent>
// 					</Tabs>
// 				</CardContent>
// 				<CardFooter className='border-t pt-6 flex flex-col sm:flex-row gap-3 sm:justify-between'>
// 					<Button variant='outline' className='w-full sm:w-auto'>
// 						<Settings className='mr-2 h-4 w-4' />
// 						Account Settings
// 					</Button>
// 					<Link href={'/login'}>
// 						<Button
// 							variant='outline'
// 							className='w-full sm:w-auto text-destructive'
// 						>
// 							<LogOut className='mr-2 h-4 w-4' />
// 							Sign Out
// 						</Button>
// 					</Link>
// 				</CardFooter>
// 			</Card>
// 		</div>
// 	)
// }

// 'use client'

// import { useState, useRef } from 'react'
// import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
// import { Badge } from '@/components/ui/badge'
// import { Button } from '@/components/ui/button'
// import {
// 	Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,
// } from '@/components/ui/card'
// import {
// 	DropdownMenu, DropdownMenuContent, DropdownMenuItem,
// 	DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger,
// } from '@/components/ui/dropdown-menu'
// import {
// 	Tabs, TabsContent, TabsList, TabsTrigger,
// } from '@/components/ui/tabs'
// import {
// 	Calendar, Check, Edit, LogOut, Mail, MessageSquare,
// 	MoreHorizontal, Settings, User, X, Camera,
// } from 'lucide-react'
// import Link from 'next/link'

// // LocalStorage custom hook
// function useLocalStorage(key, initialValue) {
//   const [storedValue, setStoredValue] = useState(() => {
//     if (typeof window === 'undefined') {
//       return initialValue;
//     }

//     try {
//       const item = window.localStorage.getItem(key);
//       return item ? JSON.parse(item) : initialValue;
//     } catch (error) {
//       console.error(`Error reading localStorage key "${key}":`, error);
//       return initialValue;
//     }
//   });

//   const setValue = (value) => {
//     try {
//       const valueToStore = value instanceof Function ? value(storedValue) : value;
//       setStoredValue(valueToStore);
//       if (typeof window !== 'undefined') {
//         window.localStorage.setItem(key, JSON.stringify(valueToStore));
//       }
//     } catch (error) {
//       console.error(`Error setting localStorage key "${key}":`, error);
//     }
//   };

//   return [storedValue, setValue];
// }

// export default function ProfilePage() {
// 	const defaultData = {
// 		fullName: 'Alex Johnson',
// 		bio: "Foydalanuvchi haqida ma`lumot",
// 		email: 'example@mail.com',
// 		joinDate: '12 April 2023',
// 		description: "Foydalanuvchi tavsifi",
// 	}

// 	const [isEditing, setIsEditing] = useState(false)
// 	const [profileData, setProfileData] = useLocalStorage('profileData', defaultData)
// 	const [profileImage, setProfileImage] = useLocalStorage('profileImage', '/placeholder.svg?height=80&width=80')
// 	const fileInputRef = useRef(null)

// 	const handleInputChange = (e) => {
// 		const { name, value } = e.target
// 		setProfileData((prev) => ({
// 			...prev,
// 			[name]: value,
// 		}))
// 	}

// 	const handleImageUpload = (e) => {
// 		const file = e.target.files[0]
// 		if (file) {
// 			const reader = new FileReader()
// 			reader.onloadend = () => {
// 				setProfileImage(reader.result)
// 			}
// 			reader.readAsDataURL(file)
// 		}
// 	}

// 	const triggerFileInput = () => {
// 		fileInputRef.current.click()
// 	}

// 	const handleSaveProfile = () => {
// 		setIsEditing(false)
// 		// Ma'lumotlar avtomatik ravishda localStorage-ga saqlanadi
// 	}

// 	const handleCancelEdit = () => {
// 		setIsEditing(false)
// 	}

// 	const getInitials = (name) => {
// 		return name
// 			.split(' ')
// 			.map((part) => part[0])
// 			.join('')
// 			.toUpperCase()
// 			.substring(0, 2)
// 	}

// 	return (
// 		<div className='container mx-auto pt-20 px-4 md:px-6'>
// 			<Card className='max-w-4xl mx-auto'>
// 				<CardHeader className='relative pb-0'>
// 					<div className='absolute right-6 top-6'>
// 						<DropdownMenu>
// 							<DropdownMenuTrigger asChild>
// 								<Button variant='ghost' size='icon'>
// 									<MoreHorizontal className='h-5 w-5' />
// 								</Button>
// 							</DropdownMenuTrigger>
// 							<DropdownMenuContent align='end'>
// 								<DropdownMenuLabel>Profile Actions</DropdownMenuLabel>
// 								<DropdownMenuSeparator />
// 								<DropdownMenuItem onClick={() => setIsEditing(true)}>
// 									<Edit className='mr-2 h-4 w-4' />
// 									<span>Edit Profile</span>
// 								</DropdownMenuItem>
// 							</DropdownMenuContent>
// 						</DropdownMenu>
// 					</div>

// 					<div className='flex flex-col md:flex-row gap-4 items-start md:items-center'>
// 						<div className='relative'>
// 							<Avatar className='h-20 w-20 border-4 border-background'>
// 								<AvatarImage src={profileImage} alt={profileData.fullName} />
// 								<AvatarFallback>{getInitials(profileData.fullName)}</AvatarFallback>
// 							</Avatar>
// 							{isEditing && (
// 								<>
// 									<input
// 										type='file'
// 										ref={fileInputRef}
// 										className='hidden'
// 										accept='image/*'
// 										onChange={handleImageUpload}
// 									/>
// 									<Button
// 										onClick={triggerFileInput}
// 										size='icon'
// 										className='absolute bottom-0 right-0 rounded-full'
// 										variant='secondary'
// 									>
// 										<Camera className='h-4 w-4' />
// 									</Button>
// 								</>
// 							)}
// 						</div>

// 						<div>
// 							<div className='flex items-center gap-2'>
// 								<CardTitle className='text-2xl'>{profileData.fullName}</CardTitle>
// 								<Badge>Pro Member</Badge>
// 							</div>
// 							<CardDescription className='text-base mt-1'>{profileData.bio}</CardDescription>
// 							<div className='flex gap-2 mt-2'>
// 								<Button size='sm' variant='outline'>
// 									<User className='mr-2 h-4 w-4' /> Follow
// 								</Button>
// 								<Button size='sm' variant='outline'>
// 									<MessageSquare className='mr-2 h-4 w-4' /> Message
// 								</Button>
// 								{!isEditing && (
// 									<Button size='sm' variant='outline' onClick={() => setIsEditing(true)}>
// 										<Edit className='mr-2 h-4 w-4' /> Edit Profile
// 									</Button>
// 								)}
// 							</div>
// 						</div>
// 					</div>
// 				</CardHeader>

// 				<CardContent className='pt-6'>
// 					<Tabs defaultValue='about'>
// 						<TabsList className='mb-4 flex flex-wrap md:flex-nowrap overflow-x-auto gap-2 scrollbar-hide'>
// 							<TabsTrigger value='about'>Haqida</TabsTrigger>
// 							<TabsTrigger value='posts'>Tashriflar</TabsTrigger>
// 							<TabsTrigger value='photos'>Baholar</TabsTrigger>
// 							<TabsTrigger value='friends'>Dostlar</TabsTrigger>
// 						</TabsList>

// 						<TabsContent value='about'>
// 							{isEditing ? (
// 								<div className='space-y-6'>
// 									{['fullName', 'bio', 'description', 'email'].map((field) => (
// 										<div key={field}>
// 											<label htmlFor={field}>{field}</label>
// 											<input
// 												id={field}
// 												name={field}
// 												value={profileData[field]}
// 												onChange={handleInputChange}
// 												className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2'
// 											/>
// 										</div>
// 									))}

// 									<div>
// 										<label htmlFor='joinDate'>Ro`yxatdan o`tgan sana</label>
// 										<input
// 											id='joinDate'
// 											name='joinDate'
// 											value={profileData.joinDate}
// 											disabled
// 											className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-gray-100'
// 										/>
// 									</div>

// 									<div className='flex gap-4 justify-end pt-4'>
// 										<Button variant='outline' onClick={handleCancelEdit}>
// 											<X className='mr-2 h-4 w-4' /> Bekor qilish
// 										</Button>
// 										<Button onClick={handleSaveProfile}>
// 											<Check className='mr-2 h-4 w-4' /> O`zgarishlarni saqlash
// 										</Button>
// 									</div>
// 								</div>
// 							) : (
// 								<div className='space-y-4'>
// 									<p>{profileData.description}</p>
// 									<ul className='mt-2 space-y-2'>
// 										<li className='flex items-center'>
// 											<Mail className='mr-2 h-4 w-4 text-muted-foreground' />
// 											<span>{profileData.email}</span>
// 										</li>
// 										<li className='flex items-center'>
// 											<Calendar className='mr-2 h-4 w-4 text-muted-foreground' />
// 											<span>{profileData.joinDate}</span>
// 										</li>
// 									</ul>
// 								</div>
// 							)}
// 						</TabsContent>
// 					</Tabs>
// 				</CardContent>

// 				<CardFooter className='border-t pt-6 flex flex-col sm:flex-row gap-3 sm:justify-between'>
// 					<Button variant='outline' className='w-full sm:w-auto'>
// 						<Settings className='mr-2 h-4 w-4' /> Sozlamalar
// 					</Button>
// 					<Link href={'/login'}>
// 						<Button variant='outline' className='w-full sm:w-auto text-destructive'>
// 							<LogOut className='mr-2 h-4 w-4' /> Chiqish
// 						</Button>
// 					</Link>
// 				</CardFooter>
// 			</Card>
// 		</div>
// 	)
// }
'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
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
	Camera,
	Check,
	Edit,
	LogOut,
	Mail,
	MessageSquare,
	MoreHorizontal,
	Settings,
	User,
	X,
} from 'lucide-react'
import Link from 'next/link'
import { ChangeEvent, useRef, useState } from 'react'

// LocalStorage custom hook with TypeScript typing
function useLocalStorage<T>(
	key: string,
	initialValue: T
): [T, (value: T | ((prevValue: T) => T)) => void] {
	const [storedValue, setStoredValue] = useState<T>(() => {
		if (typeof window === 'undefined') {
			return initialValue
		}

		try {
			const item = window.localStorage.getItem(key)
			return item ? JSON.parse(item) : initialValue
		} catch (error) {
			console.error(`Error reading localStorage key "${key}":`, error)
			return initialValue
		}
	})

	const setValue = (value: T | ((prevValue: T) => T)) => {
		try {
			const valueToStore =
				value instanceof Function ? value(storedValue) : value
			setStoredValue(valueToStore)
			if (typeof window !== 'undefined') {
				window.localStorage.setItem(key, JSON.stringify(valueToStore))
			}
		} catch (error) {
			console.error(`Error setting localStorage key "${key}":`, error)
		}
	}

	return [storedValue, setValue]
}

interface ProfileData {
	fullName: string
	bio: string
	email: string
	joinDate: string
	description: string
}

export default function ProfilePage() {
	const defaultData: ProfileData = {
		fullName: 'Ism Familiya',
		bio: 'Foydalanuvchi haqida ma`lumot',
		email: 'example@mail.com',
		joinDate: '',
		description: 'Foydalanuvchi tavsifi',
	}

	const [isEditing, setIsEditing] = useState<boolean>(false)
	const [profileData, setProfileData] = useLocalStorage<ProfileData>(
		'profileData',
		defaultData
	)
	const [profileImage, setProfileImage] = useLocalStorage<string>(
		'profileImage',
		'/placeholder.svg?height=80&width=80'
	)
	const fileInputRef = useRef<HTMLInputElement | null>(null)

	const handleInputChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	): void => {
		const { name, value } = e.target
		setProfileData(prev => ({
			...prev,
			[name]: value,
		}))
	}

	const handleImageUpload = (e: ChangeEvent<HTMLInputElement>): void => {
		const file = e.target.files?.[0]
		if (file) {
			const reader = new FileReader()
			reader.onloadend = () => {
				if (reader.result) {
					setProfileImage(reader.result as string)
				}
			}
			reader.readAsDataURL(file)
		}
	}

	const triggerFileInput = (): void => {
		fileInputRef.current?.click()
	}

	const handleSaveProfile = (): void => {
		setIsEditing(false)
		// Ma'lumotlar avtomatik ravishda localStorage-ga saqlanadi
	}

	const handleCancelEdit = (): void => {
		setIsEditing(false)
	}

	const getInitials = (name: string): string => {
		return name
			.split(' ')
			.map(part => part[0])
			.join('')
			.toUpperCase()
			.substring(0, 2)
	}

	return (
		<div className='container mx-auto pt-20 px-4 md:px-6'>
			<Card className='max-w-4xl mx-auto'>
				<CardHeader className='relative pb-0'>
					<div className='absolute right-6 top-6'>
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button variant='ghost' size='icon'>
									<MoreHorizontal className='h-5 w-5' />
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent align='end'>
								<DropdownMenuLabel>
									Profile Actions
								</DropdownMenuLabel>
								<DropdownMenuSeparator />
								<DropdownMenuItem
									onClick={() => setIsEditing(true)}
								>
									<Edit className='mr-2 h-4 w-4' />
									<span>Edit Profile</span>
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</div>

					<div className='flex flex-col md:flex-row gap-4 items-start md:items-center'>
						<div className='relative'>
							<Avatar className='h-20 w-20 border-4 border-background'>
								<AvatarImage
									src={profileImage}
									alt={profileData.fullName}
								/>
								<AvatarFallback>
									{getInitials(profileData.fullName)}
								</AvatarFallback>
							</Avatar>
							{isEditing && (
								<>
									<input
										type='file'
										ref={fileInputRef}
										className='hidden'
										accept='image/*'
										onChange={handleImageUpload}
									/>
									<Button
										onClick={triggerFileInput}
										size='icon'
										className='absolute bottom-0 right-0 rounded-full'
										variant='secondary'
									>
										<Camera className='h-4 w-4' />
									</Button>
								</>
							)}
						</div>

						<div>
							<div className='flex items-center gap-2'>
								<CardTitle className='text-2xl'>
									{profileData.fullName}
								</CardTitle>
							</div>
							<CardDescription className='text-base mt-1'>
								{profileData.bio}
							</CardDescription>
							<div className='md:flex gap-2 mt-2'>
								<Button size='sm' variant='outline'>
									<User className='mr-2 h-4 w-4' /> Follow
								</Button>
								<Button size='sm' variant='outline'>
									<MessageSquare className='mr-2 h-4 w-4' />{' '}
									Message
								</Button>
								{!isEditing && (
									<Button
										size='sm'
										variant='outline'
										onClick={() => setIsEditing(true)}
									>
										<Edit className='mr-2 h-4 w-4' /> Edit
										Profile
									</Button>
								)}
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
							<TabsTrigger value='friends'>Do`stlar</TabsTrigger>
						</TabsList>

						<TabsContent value='about'>
							{isEditing ? (
								<div className='space-y-6'>
									{[
										'fullName',
										'bio',
										'description',
										'email',
									].map(field => (
										<div key={field}>
											<label htmlFor={field}>
												{field}
											</label>
											<input
												id={field}
												name={field}
												maxLength={20}
												value={
													profileData[
														field as keyof ProfileData
													]
												}
												onChange={handleInputChange}
												className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2'
											/>
										</div>
									))}

									<div>
										<label htmlFor='joinDate'>
											Ro`yxatdan o`tgan sana
										</label>
										<input
											id='joinDate'
											name='joinDate'
											value={profileData.joinDate}
											disabled
											className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-gray-100'
										/>
									</div>

									<div className='md:flex gap-4 justify-end pt-4'>
										<Button
											variant='outline'
											onClick={handleCancelEdit}
										>
											<X className='mr-2 h-4 w-4' /> Bekor
											qilish
										</Button>
										<Button onClick={handleSaveProfile}>
											<Check className='mr-2 h-4 w-4' />{' '}
											O`zgarishlarni saqlash
										</Button>
									</div>
								</div>
							) : (
								<div className='space-y-4'>
									<p>{profileData.description}</p>
									<ul className='mt-2 space-y-2'>
										<li className='flex items-center'>
											<Mail className='mr-2 h-4 w-4 text-muted-foreground' />
											<span>{profileData.email}</span>
										</li>
										<li className='flex items-center'>
											<Calendar className='mr-2 h-4 w-4 text-muted-foreground' />
											<span>{profileData.joinDate}</span>
										</li>
									</ul>
								</div>
							)}
						</TabsContent>
					</Tabs>
				</CardContent>

				<CardFooter className='border-t pt-6 flex flex-col sm:flex-row gap-3 sm:justify-between'>
					<Button variant='outline' className='w-full sm:w-auto'>
						<Settings className='mr-2 h-4 w-4' /> Sozlamalar
					</Button>
					<Link href={'/login'}>
						<Button
							variant='outline'
							className='w-full sm:w-auto text-destructive'
						>
							<LogOut className='mr-2 h-4 w-4' /> Chiqish
						</Button>
					</Link>
				</CardFooter>
			</Card>
		</div>
	)
}
