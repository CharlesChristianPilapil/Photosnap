import mobile from '../../../assets/pricing/mobile/hero.jpg'
import tablet from '../../../assets/pricing/tablet/hero.jpg'
import desktop from '../../../assets/pricing/desktop/hero.jpg'

const pricingConstants = {
    hero: {
        mobile,
        tablet,
        desktop
    },

    subscription: [
        {
            offer: 'Basic',
            description: 'Includes basic usage of our platform. Recommended for new and aspiring photographers.',
            monthly: '$19.00',
            yearly: '$190.00'
        },

        {
            offer: 'Pro',
            description: 'More advanced features available. Recommended for photography veterans and professionals.',
            monthly: '$39.00',
            yearly: '$390.00'
        },

        {
            offer: 'Business',
            description: 'Additional features available such as more detailed metrics. Recommended for business owners.',
            monthly: '$99.00',
            yearly: '$990.00'
        }

    ],

}

export default pricingConstants;