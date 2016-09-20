var React = require('react');
var ReactDOM = require('react-dom');
var css = require('../css/main.css');

module.exports = function () {
    var Block = React.createClass({

        task1: function(event) {
            console.log('11111111');
        },


        render: function() {
            return (
                <div id="slide">
                    <video>
                        <source src={require('../video/intro.mp4')} type="video/mp4" controls/>
                        Ваш браузер не поддерживает видео.
                    </video>
                    <div id="question">
                        <div>
                            Задание№ 1: 111111111 12312 31234234 234 234 234 234
                        </div>
                        <label>Ответ:</label><input type="text"/>
                        <button onClick={this.task1}>Дальше</button>
                    </div>
                </div>
            );
        }
    });

    ReactDOM.render( <Block />,
        document.getElementById('content'));

};