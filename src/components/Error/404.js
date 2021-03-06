import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import style from './index.less';

class ErrorPage extends React.Component {
    static contextTypes = {
        router: PropTypes.object
    };

    Click = () => {
      return this.context.router.push('/main/article')
    };

    render() {
        return (
            <div className={style.wrap}>
                <div className={style.btn}>
                    <Button onClick={this.Click} type='primary'>返回首页</Button>
                </div>
            </div>
        );
    }
}

export default ErrorPage;