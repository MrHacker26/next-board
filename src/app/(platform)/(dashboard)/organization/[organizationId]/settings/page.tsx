import { OrganizationProfile } from '@clerk/nextjs'

const SettingsPage = () => {
  return (
    <div className="w-full">
      <OrganizationProfile
        appearance={{
          elements: {
            rootBox: {
              boxShadow: 'none',
              width: '100%',
            },
            card: {
              border: '1px solid #e5e7eb',
              boxShadow: 'none',
              width: '100%',
            },
          },
        }}
      />
    </div>
  )
}

export default SettingsPage
