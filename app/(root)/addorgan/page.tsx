// // app/(root)/addorgan/page.tsx
// 'use client';

// import { useRouter } from 'next/navigation'; // Note: using next/navigation instead of next/router
// import { useState } from 'react'

// export default function AddOrganization() {
//   const router = useRouter();
//   const [formData, setFormData] = useState({
//     name: '',
//     location: '',
//     services: [],
//     schedule: '',
//     phoneNumber: '',
//     email: '',
//     website: ''
//   });
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [serviceInput, setServiceInput] = useState('');

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleServiceInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setServiceInput(e.target.value);
//   };

//   const addService = () => {
//     if (serviceInput.trim() !== '') {
//       setFormData({
//         ...formData,
//         services: [...formData.services, serviceInput.trim()]
//       });
//       setServiceInput('');
//     }
//   };

//   const removeService = (index: number) => {
//     const updatedServices = [...formData.services];
//     updatedServices.splice(index, 1);
//     setFormData({ ...formData, services: updatedServices });
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError(null);

//     try {
//       const response = await fetch('https://snavbatbackend.onrender.com/api/organizations', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.message || 'Tashkilot qo\'shishda xatolik yuz berdi');
//       }

//       // Redirect to organizations list or show success message
//       alert('Tashkilot muvaffaqiyatli qo\'shildi!');
//       router.push('/organizations'); // Assuming you have an organizations list page
//     } catch (err: any) {
//       setError(err.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="container  flex flex-col items-center justify-center px-4 py-20">
//       <h1 className="text-2xl font-bold mb-6">Yangi tashkilot qo`shish</h1>

//       {error && (
//         <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 mb-4 rounded">
//           {error}
//         </div>
//       )}

//       <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
//         <div>
//           <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//             Tashkilot nomi
//           </label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             required
//             value={formData.name}
//             onChange={handleChange}
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//           />
//         </div>

//         <div>
//           <label htmlFor="location" className="block text-sm font-medium text-gray-700">
//             Manzil
//           </label>
//           <input
//             type="text"
//             id="location"
//             name="location"
//             required
//             value={formData.location}
//             onChange={handleChange}
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700">Xizmatlar</label>
//           <div className="flex space-x-2 mb-2">
//             <input
//               type="text"
//               value={serviceInput}
//               onChange={handleServiceInputChange}
//               className="flex-grow px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//               placeholder="Xizmat nomini kiriting"
//             />
//             <button
//               type="button"
//               onClick={addService}
//               className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
//             >
//               Qo`shish
//             </button>
//           </div>
//           {formData.services.length > 0 && (
//             <div className="mt-2 border border-gray-200 rounded-md p-3">
//               <ul className="divide-y divide-gray-200">
//                 {formData.services.map((service, index) => (
//                   <li key={index} className="py-2 flex justify-between items-center">
//                     <span>{service}</span>
//                     <button
//                       type="button"
//                       onClick={() => removeService(index)}
//                       className="text-red-500 hover:text-red-700"
//                     >
//                       O`chirish
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>

//         <div>
//           <label htmlFor="schedule" className="block text-sm font-medium text-gray-700">
//             Ish vaqti
//           </label>
//           <input
//             type="text"
//             id="schedule"
//             name="schedule"
//             required
//             value={formData.schedule}
//             onChange={handleChange}
//             placeholder="9:00 AM - 6:00 PM"
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//           />
//         </div>

//         <div>
//           <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
//             Telefon raqami
//           </label>
//           <input
//             type="text"
//             id="phoneNumber"
//             name="phoneNumber"
//             required
//             value={formData.phoneNumber}
//             onChange={handleChange}
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//           />
//         </div>

//         <div>
//           <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//             Email
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//           />
//         </div>

//         <div>
//           <label htmlFor="website" className="block text-sm font-medium text-gray-700">
//             Veb-sayt
//           </label>
//           <input
//             type="url"
//             id="website"
//             name="website"
//             value={formData.website}
//             onChange={handleChange}
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//           />
//         </div>

//         <div className="flex justify-end">
//           <button
//             type="submit"
//             disabled={isLoading}
//             className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
//           >
//             {isLoading ? 'Yuborilmoqda...' : 'Tashkilotni qo\'shish'}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

const weekdays = [
	'dushanba',
	'seshanba',
	'chorshanba',
	'payshanba',
	'juma',
	'shanba',
	'yakshanba',
]

export default function AddOrganization() {
	const router = useRouter()
	const [formData, setFormData] = useState({
		name: '',
		location: '',
		services: [],
		schedule: {
			dushanba: '',
			seshanba: '',
			chorshanba: '',
			payshanba: '',
			juma: '',
			shanba: '',
			yakshanba: '',
		},
		phoneNumber: '',
		email: '',
		website: '',
	})

	const [serviceInput, setServiceInput] = useState('')
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setFormData(prev => ({ ...prev, [name]: value }))
	}

	const handleScheduleChange = (day: string, value: string) => {
		setFormData(prev => ({
			...prev,
			schedule: {
				...prev.schedule,
				[day]: value,
			},
		}))
	}

	const handleServiceInputChange = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		setServiceInput(e.target.value)
	}

	const addService = () => {
		if (serviceInput.trim() !== '') {
			setFormData({
				...formData,
				services: [...formData.services, serviceInput.trim()],
			})
			setServiceInput('')
		}
	}

	const removeService = (index: number) => {
		const updatedServices = [...formData.services]
		updatedServices.splice(index, 1)
		setFormData({ ...formData, services: updatedServices })
	}

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setIsLoading(true)
		setError(null)

		try {
			const response = await fetch(
				'https://snavbatbackend.onrender.com/api/organizations',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(formData),
				}
			)

			const data = await response.json()

			if (!response.ok) {
				throw new Error(
					data.message || "Tashkilot qo'shishda xatolik yuz berdi"
				)
			}

			alert('Tashkilot muvaffaqiyatli qo‘shildi!')
			router.push('/addorgan')
		} catch (err: any) {
			setError(err.message)
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<div className='container py-[80px] max-w-3xl mx-auto'>
			<h1 className='text-2xl font-bold mb-6'>
				Yangi tashkilot qo‘shish
			</h1>

			{error && (
				<div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 mb-4 rounded'>
					{error}
				</div>
			)}

			<form onSubmit={handleSubmit} className='space-y-6'>
				<div>
					<label className='block text-sm font-medium mb-1'>
						Tashkilot nomi
					</label>
					<input
						type='text'
						name='name'
						value={formData.name}
						onChange={handleChange}
						required
						className='w-full px-3 py-2 border rounded-md'
					/>
				</div>

				<div>
					<label className='block text-sm font-medium mb-1'>
						Manzil
					</label>
					<input
						type='text'
						name='location'
						value={formData.location}
						onChange={handleChange}
						required
						className='w-full px-3 py-2 border rounded-md'
					/>
				</div>

				<div>
					<label className='block text-sm font-medium mb-2'>
						Xizmatlar
					</label>
					<div className='flex gap-2'>
						<input
							type='text'
							value={serviceInput}
							onChange={handleServiceInputChange}
							className='flex-grow px-3 py-2 border rounded-md'
							placeholder='Xizmat nomi'
						/>
						<button
							type='button'
							onClick={addService}
							className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
						>
							Qo‘shish
						</button>
					</div>
					{formData.services.length > 0 && (
						<ul className='mt-3 space-y-1'>
							{formData.services.map((service, index) => (
								<li
									key={index}
									className='flex justify-between'
								>
									<span>{service}</span>
									<button
										type='button'
										className='text-red-500'
										onClick={() => removeService(index)}
									>
										O‘chirish
									</button>
								</li>
							))}
						</ul>
					)}
				</div>

				<div>
					<label className='block text-sm font-medium mb-2'>
						Ish vaqti (hafta kunlari bo‘yicha)
					</label>
					<div className='grid grid-cols-2 gap-4'>
						{weekdays.map(day => (
							<div key={day}>
								<label className='text-sm capitalize block mb-1'>
									{day}
								</label>
								<input
									type='text'
									value={
										formData.schedule[
											day as keyof typeof formData.schedule
										]
									}
									onChange={e =>
										handleScheduleChange(
											day,
											e.target.value
										)
									}
									placeholder='Masalan: 9:00 - 18:00 yoki dam'
									className='w-full px-3 py-2 border rounded-md'
								/>
							</div>
						))}
					</div>
				</div>

				<div>
					<label className='block text-sm font-medium mb-1'>
						Telefon raqami
					</label>
					<input
						type='text'
						name='phoneNumber'
						value={formData.phoneNumber}
						onChange={handleChange}
						required
						className='w-full px-3 py-2 border rounded-md'
					/>
				</div>

				<div>
					<label className='block text-sm font-medium mb-1'>
						Email
					</label>
					<input
						type='email'
						name='email'
						value={formData.email}
						onChange={handleChange}
						className='w-full px-3 py-2 border rounded-md'
					/>
				</div>

				<div>
					<label className='block text-sm font-medium mb-1'>
						Web-sayt
					</label>
					<input
						type='url'
						name='website'
						value={formData.website}
						onChange={handleChange}
						className='w-full px-3 py-2 border rounded-md'
					/>
				</div>

				<div className='text-right'>
					<button
						type='submit'
						disabled={isLoading}
						className='bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700'
					>
						{isLoading ? 'Yuborilmoqda...' : 'Tashkilotni qo‘shish'}
					</button>
				</div>
			</form>
		</div>
	)
}
