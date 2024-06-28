import Asset from '../models/Asset.js';

// Tạo mới một admin
export const getFigures = async (req, res) => {
    try {
        //    const amountOfSchool = await Asset.aggregate([{
        //     $group: {
        //         _id: null,
        //         totalPrice: {
        //             $sum: '$price',
        //         },
        //         totalQuanity: {
        //             $sum: '$quantity'
        //         },
        //         totalWearrate: {
        //             $sum: "$wearrate"
        //         }
        //     }
        //    }])

        const [allAssets, assetsTypeGroups, assetsDeparmentsGroups, assetsFaculityGroups] = await Promise.all([Asset.find(), Asset.aggregate([
            {
                $group: {
                    _id: '$assettype',
                    assets: { $push: '$$ROOT' }
                }
            },
            {
                $lookup: {
                    from: 'assettypes',
                    localField: '_id',
                    foreignField: '_id',
                    as: 'assettype'
                }
            },
            {
                $unwind: '$assettype'
            }
        ]), Asset.aggregate([
            {
                $group: {
                    _id: '$department',
                    assets: { $push: '$$ROOT' }
                }
            },
            {
                $lookup: {
                    from: 'departments',
                    localField: '_id',
                    foreignField: '_id',
                    as: 'department'
                }
            },
            {
                $unwind: '$department'
            }
        ]),  Asset.aggregate([
            {
                $lookup: {
                    from: 'departments',
                    localField: 'department',
                    foreignField: '_id',
                    as: 'department'
                }
            },
            {
                $unwind: '$department'
            },
            {
                $lookup: {
                    from: 'faculties',
                    localField: 'department.faculty',
                    foreignField: '_id',
                    as: 'faculty'
                }
            },
            {
                $unwind: '$faculty'
            },
            {
                $group: {
                    _id: '$faculty.name',
                    assets: { $push: '$$ROOT' }
                }
            }
        ])])
        const amountOfSchool = allAssets.reduce((accumulator, currentValue) => {
            return Number(currentValue.quantity) * Number(currentValue.price) - (currentValue.wearrate ? Number(currentValue.price) * Number(currentValue.wearrate) / 100 : 0) + accumulator
        }, 0)
        const amountOfTypeGroups = assetsTypeGroups.map(a => {
            return {
                type: a.assettype.name,
                amount: a?.assets?.reduce((accumulator, currentValue) => {
                    return Number(currentValue.quantity) * Number(currentValue.price) - (currentValue.wearrate ? Number(currentValue.price) * Number(currentValue.wearrate) / 100 : 0) + accumulator
                }, 0)
            }
        })
        const amountOfDeparmentGroups = assetsDeparmentsGroups.map(a => {
            return {
                type: a.department.name,
                amount: a?.assets?.reduce((accumulator, currentValue) => {
                    return Number(currentValue.quantity) * Number(currentValue.price) - (currentValue.wearrate ? Number(currentValue.price) * Number(currentValue.wearrate) / 100 : 0) + accumulator
                }, 0)
            }
        })
        const amountOfFaculatyGroups = assetsFaculityGroups.map(a => {
            return {
                type: a._id,
                amount: a?.assets?.reduce((accumulator, currentValue) => {
                    return Number(currentValue.quantity) * Number(currentValue.price) - (currentValue.wearrate ? Number(currentValue.price) * Number(currentValue.wearrate) / 100 : 0) + accumulator
                }, 0)
            }
        })

        return res.status(200).json({
            amountOfSchool,
            amountOfTypeGroups,
            amountOfDeparmentGroups,
            amountOfFaculatyGroups
        })
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
