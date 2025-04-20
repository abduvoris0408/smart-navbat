// 'use client'

// import { useRouter } from 'next/navigation'
// import { useState } from 'react'

// const weekdays = [
// 	'dushanba',
// 	'seshanba',
// 	'chorshanba',
// 	'payshanba',
// 	'juma',
// 	'shanba',
// 	'yakshanba',
// ]

// export default function AddOrganization() {
// 	const router = useRouter()
// 	const [formData, setFormData] = useState({
// 		name: '',
// 		location: '',
// 		services: [],
// 		schedule: {
// 			dushanba: '',
// 			seshanba: '',
// 			chorshanba: '',
// 			payshanba: '',
// 			juma: '',
// 			shanba: '',
// 			yakshanba: '',
// 		},
// 		phoneNumber: '',
// 		email: '',
// 		website: '',
// 	})

// 	const [serviceInput, setServiceInput] = useState('')
// 	const [isLoading, setIsLoading] = useState(false)
// 	const [error, setError] = useState<string | null>(null)

// 	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		const { name, value } = e.target
// 		setFormData(prev => ({ ...prev, [name]: value }))
// 	}

// 	const handleScheduleChange = (day: string, value: string) => {
// 		setFormData(prev => ({
// 			...prev,
// 			schedule: {
// 				...prev.schedule,
// 				[day]: value,
// 			},
// 		}))
// 	}

// 	const handleServiceInputChange = (
// 		e: React.ChangeEvent<HTMLInputElement>
// 	) => {
// 		setServiceInput(e.target.value)
// 	}

// 	// const addService = () => {
// 	// 	if (serviceInput.trim() !== '') {
// 	// 		setFormData({
// 	// 			...formData,
// 	// 			services: [...formData.services, serviceInput.trim()],
// 	// 		})
// 	// 		setServiceInput('')
// 	// 	}
// 	// }
// 	interface FormData {
// 		services: string[] // services array of strings
// 		// other fields
// 	}

// 	// Use a different variable name for your state
// 	const [form, setForm] = useState<FormData>({
// 		services: [] as string[],
// 		// other initial values
// 	})

// 	const addService = () => {
// 		if (serviceInput.trim() !== '') {
// 			setForm({
// 				...form,
// 				services: [...form.services, serviceInput.trim()],
// 			})
// 			setServiceInput('')
// 		}
// 	}

// 	const removeService = (index: number) => {
// 		const updatedServices = [...formData.services]
// 		updatedServices.splice(index, 1)
// 		setFormData({ ...formData, services: updatedServices })
// 	}

// 	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
// 		e.preventDefault()
// 		setIsLoading(true)
// 		setError(null)

// 		try {
// 			const response = await fetch(
// 				'https://snavbatbackend.onrender.com/api/organizations',
// 				{
// 					method: 'POST',
// 					headers: {
// 						'Content-Type': 'application/json',
// 					},
// 					body: JSON.stringify(formData),
// 				}
// 			)

// 			const data = await response.json()

// 			if (!response.ok) {
// 				throw new Error(
// 					data.message || "Tashkilot qo'shishda xatolik yuz berdi"
// 				)
// 			}

// 			alert('Tashkilot muvaffaqiyatli qo‘shildi!')
// 			router.push('/addorgan')
// 		} catch (err: any) {
// 			setError(err.message)
// 		} finally {
// 			setIsLoading(false)
// 		}
// 	}

// 	return (
// 		<div className='container py-[80px] max-w-3xl mx-auto'>
// 			<h1 className='text-2xl font-bold mb-6'>
// 				Yangi tashkilot qo‘shish
// 			</h1>

// 			{error && (
// 				<div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 mb-4 rounded'>
// 					{error}
// 				</div>
// 			)}

// 			<form onSubmit={handleSubmit} className='space-y-6'>
// 				<div>
// 					<label className='block text-sm font-medium mb-1'>
// 						Tashkilot nomi
// 					</label>
// 					<input
// 						type='text'
// 						name='name'
// 						value={formData.name}
// 						onChange={handleChange}
// 						required
// 						className='w-full px-3 py-2 border rounded-md'
// 					/>
// 				</div>

// 				<div>
// 					<label className='block text-sm font-medium mb-1'>
// 						Manzil
// 					</label>
// 					<input
// 						type='text'
// 						name='location'
// 						value={formData.location}
// 						onChange={handleChange}
// 						required
// 						className='w-full px-3 py-2 border rounded-md'
// 					/>
// 				</div>

// 				<div>
// 					<label className='block text-sm font-medium mb-2'>
// 						Xizmatlar
// 					</label>
// 					<div className='flex gap-2'>
// 						<input
// 							type='text'
// 							value={serviceInput}
// 							onChange={handleServiceInputChange}
// 							className='flex-grow px-3 py-2 border rounded-md'
// 							placeholder='Xizmat nomi'
// 						/>
// 						<button
// 							type='button'
// 							onClick={addService}
// 							className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
// 						>
// 							Qo‘shish
// 						</button>
// 					</div>
// 					{formData.services.length > 0 && (
// 						<ul className='mt-3 space-y-1'>
// 							{formData.services.map((service, index) => (
// 								<li
// 									key={index}
// 									className='flex justify-between'
// 								>
// 									<span>{service}</span>
// 									<button
// 										type='button'
// 										className='text-red-500'
// 										onClick={() => removeService(index)}
// 									>
// 										O‘chirish
// 									</button>
// 								</li>
// 							))}
// 						</ul>
// 					)}
// 				</div>

// 				<div>
// 					<label className='block text-sm font-medium mb-2'>
// 						Ish vaqti (hafta kunlari bo‘yicha)
// 					</label>
// 					<div className='grid grid-cols-2 gap-4'>
// 						{weekdays.map(day => (
// 							<div key={day}>
// 								<label className='text-sm capitalize block mb-1'>
// 									{day}
// 								</label>
// 								<input
// 									type='text'
// 									value={
// 										formData.schedule[
// 											day as keyof typeof formData.schedule
// 										]
// 									}
// 									onChange={e =>
// 										handleScheduleChange(
// 											day,
// 											e.target.value
// 										)
// 									}
// 									placeholder='Masalan: 9:00 - 18:00 yoki dam'
// 									className='w-full px-3 py-2 border rounded-md'
// 								/>
// 							</div>
// 						))}
// 					</div>
// 				</div>

// 				<div>
// 					<label className='block text-sm font-medium mb-1'>
// 						Telefon raqami
// 					</label>
// 					<input
// 						type='text'
// 						name='phoneNumber'
// 						value={formData.phoneNumber}
// 						onChange={handleChange}
// 						required
// 						className='w-full px-3 py-2 border rounded-md'
// 					/>
// 				</div>

// 				<div>
// 					<label className='block text-sm font-medium mb-1'>
// 						Email
// 					</label>
// 					<input
// 						type='email'
// 						name='email'
// 						value={formData.email}
// 						onChange={handleChange}
// 						className='w-full px-3 py-2 border rounded-md'
// 					/>
// 				</div>

// 				<div>
// 					<label className='block text-sm font-medium mb-1'>
// 						Web-sayt
// 					</label>
// 					<input
// 						type='url'
// 						name='website'
// 						value={formData.website}
// 						onChange={handleChange}
// 						className='w-full px-3 py-2 border rounded-md'
// 					/>
// 				</div>

// 				<div className='text-right'>
// 					<button
// 						type='submit'
// 						disabled={isLoading}
// 						className='bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700'
// 					>
// 						{isLoading ? 'Yuborilmoqda...' : 'Tashkilotni qo‘shish'}
// 					</button>
// 				</div>
// 			</form>
// 		</div>
// 	)
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
    services: [] as string[], // Explicitly typing the services array
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

      alert('Tashkilot muvaffaqiyatli qo`shildi!')
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
        Yangi tashkilot qo`shish
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
              Qo`shish
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
                    O`chirish
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div>
          <label className='block text-sm font-medium mb-2'>
            Ish vaqti (hafta kunlari bo`yicha)
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
            {isLoading ? 'Yuborilmoqda...' : 'Tashkilotni qo`shish'}
          </button>
        </div>
      </form>
    </div>
  )
}