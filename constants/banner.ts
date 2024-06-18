
interface BannerItem {
    path: string,
    title: string,
    desc: string,
    linkName: string,
    links: string
}

const banner: BannerItem[] = [
    { path: '/banner/banner1.jpg', title: 'seaside resort', desc: 'situated on the most beatiful coastline of Vung Tau', linkName: 'giới thiệu', links: '#' },
    { path: '/banner/banner2.jpg', title: 'phòng nghỉ', desc: 'Nghỉ ngơi thực sự với thiết kế lưu giữ nét ấm áp và thân quen', linkName: 'tìm hiểu thêm', links: '#' },
    { path: '/banner/banner3.jpg', title: 'hội nghị', desc: 'An nhiên, tận hưởng từng giây phút thư gián tuyệt đối', linkName: 'tìm hiểu thêm', links: '#' },
    { path: '/banner/banner4.jpg', title: 'ẩm thực & giải trí', desc: 'CHiêu đãi vị giác với ẩm thực tuyệt hảo.Thỏa mãn tầm nhìn khi đắm mình vào thiên nhiên', linkName: 'tìm hiểu thêm', links: '#' },
]

export default banner;