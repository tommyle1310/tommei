interface ListAddresses {
    id: string, title: string, tag: string, isDefault: boolean
}

export const listAddresses: ListAddresses[] = [
    {
        id: '1',
        title: '102 Phan Van Hon, 12 Disctrict, SG, VN',
        tag: 'Home',
        isDefault: true
    },
    {
        id: '2',
        title: '1021 Pham Van Hai, Phu Nhuan Disctrict, SG, VN',
        tag: 'Office',
        isDefault: false
    },
    {
        id: '3',
        title: '1021 Phan Huy Ich, Go Vap Disctrict, SG, VN',
        tag: 'Apartment',
        isDefault: false
    },
]