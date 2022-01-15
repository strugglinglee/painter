import { solar2lunar } from 'solarLunar'
import dayjs from 'dayjs'

export const getDateInfo = () => {
    const now = dayjs()

    const lunar = solar2lunar(now.year(), now.month() + 1, now.date())
    return {
        ...lunar,
        lunarText: `${lunar.yearCn} ${lunar.monthCn} ${lunar.dayCn}`,
        solarText: now.format('YYYY年MM月DD日'),
    }
}
