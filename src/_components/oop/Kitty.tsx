import React, {Component} from "react";

class Kitty extends Component<any, any>{
    public state = {
        date : new Date(),
        text : '나는 뱀파이어다. 사랑하는 그녀가 날 지켜주고 숨겨준 죄로 인간들이 내가 보는 바로 앞에서 그녀를 죽였다...',
        author : {
            name : '세계 전교 1짱.,., 반휘혈(18세ㅋ.,)',
            img : 'https://lh3.googleusercontent.com/proxy/Di8XJxBTc5SlMdNW1bZ0Svxlne1qcAHKRSIIm-b0iW84NmRFEUSwnWXXplv9xEGdpZJASek49JLunaa9vZltZVo5DZYLgk2jWcGSaJ79Bk_GWWJwDt29capqHblLOPo5ZihQMhPVJCzdf0XjtNYyDoYiQW3mr2IGpynKsdOhEjO2CmAwI-79Qq3Z4qopTvN8dQr-BjE8VCA9M2x9nhSq8qVtlkK3abVdlbgfUv1WddoZIyzdHQwS-hDK3ZfkwvDU-Ru26YcDUl3_pJEFFDDa-u_7yCdxGF17pcvyrzw2l50IP3hxHhHQyQ'
        }
    }

    public render() {
        return <div className="Comment">
            <div className="UserInfo">
                <img
                    className="Avatar"
                    src={this.state.author.img}
                    alt={this.state.author.name}
                />
                <div className="UserInfo-name">
                    {this.state.author.name}
                </div>
            </div>
            <div className="Comment-text">{this.state.text}</div>
            <div className="Comment-date">
                {/*{FormatDate(this.state.date)}*/}
            </div>
        </div>
    }
}

export default Kitty