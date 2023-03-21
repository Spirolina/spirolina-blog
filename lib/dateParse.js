import moment from 'moment'

export const dateParse = (date) => {
    return moment(date).format('ddd, hA')
}