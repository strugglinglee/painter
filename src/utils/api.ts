import Taro from '@tarojs/taro'

export const cloudApi = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await Taro.cloud.callFunction({
                name: 'painterFunctions',
                config: {
                    env: 'cloud1-3gbvr43vf766c84d',
                },
                data,
            })
            resolve(res)
        } catch (error) {
            reject(error)
        }
    })
}
