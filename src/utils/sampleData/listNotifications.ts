import { notificationTypes } from "../constants";

export interface listNotifications { id: string, title: string, desc: string, tag: string }

export const listNotifications: listNotifications[] = [
    {
        id: '1',
        title: '30% Special Discount!',
        tag: notificationTypes.discount,
        desc: 'Special promotion only valid today.'
    },
    {
        id: '2',
        title: 'New Service Available!',
        tag: notificationTypes.location,
        desc: 'Now you can track your order in real-time.'
    },
    {
        id: '3',
        title: 'Credit Card Connected!',
        tag: notificationTypes.credit_card,
        desc: 'Your credit card has been linked.'
    },
    {
        id: '4',
        title: 'Account Setup Successfully!',
        tag: notificationTypes.account,
        desc: 'Your account has been created.'
    },
]