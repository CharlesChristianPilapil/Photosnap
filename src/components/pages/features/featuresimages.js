import mobile from '../../../assets/features/mobile/hero.jpg'
import tablet from '../../../assets/features/tablet/hero.jpg'
import desktop from '../../../assets/features/desktop/hero.jpg'

import boost from '../../../assets/features/desktop/boost-exposure.svg'
import custom from '../../../assets/features/desktop/custom-domain.svg'
import dragDrop from '../../../assets/features/desktop/drag-drop.svg'
import embed from '../../../assets/features/desktop/embed.svg'
import noLimit from '../../../assets/features/desktop/no-limit.svg'
import responsive from '../../../assets/features/desktop/responsive.svg'

const featuresConstants = {
    hero: {
        mobile,
        tablet,
        desktop
    },

    slide: [
        {
            title: '100% Responsive',
            text: 'No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.',
            img: responsive
        },

        {
            title: 'No Photo Upload Limit',
            text: 'Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.',
            img: noLimit
        },

        {
            title: 'Available to Embed',
            text: 'Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more.',
            img: embed
        },

        {
            title: 'Custom Domain',
            text: 'With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!',
            img: custom
        },

        {
            title: 'Boost Your Exposure',
            text: 'Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list.',
            img: boost
        },

        {
            title: 'Drag & Drop Image',
            text: 'Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories.',
            img: dragDrop
        },
        
    ]
}

export default featuresConstants;