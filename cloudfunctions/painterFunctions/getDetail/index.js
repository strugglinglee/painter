const cloud = require('wx-server-sdk')

cloud.init({
    env: cloud.DYNAMIC_CURRENT_ENV,
})

const db = cloud.database()

// 创建集合云函数入口函数
exports.main = async (event, context) => {
    try {
        const _ = db.command

        const { data: res } = await db
            .collection('images')
            .where({
                _id: _.eq(event.id),
            })
            .get()

        return Array.isArray(res) && res.length > 0 ? res[0] : null
    } catch (e) {
        // 这里catch到的是该collection已经存在，从业务逻辑上来说是运行成功的，所以catch返回success给前端，避免工具在前端抛出异常
        return {
            success: true,
            data: 'create collection success',
        }
    }
}
