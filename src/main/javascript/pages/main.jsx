var React = require('react');
var ReactDOM = require('react-dom');
var css = require('../css/main.css');

module.exports = function () {
    var Block = React.createClass({

        getInitialState: function() {
            return {
                taskDescription:'Задание №1: Вопрос для первого задания',
                taskHandler: this.task1,
                taskVideo: require('../video/intro.mp4')
            }
        },

        task1: function(event) {
            console.log('11111111');
            this.setState({
                taskDescription: 'Задание №2: Вопрос для второго задания',
                taskHandler: this.task2,
                taskVideo: require('../video/task2.mp4')
            })
        },

        task2: function(event) {
            console.log('22222222');
            this.setState({
                taskDescription: 'Задание №2: Вопрос для третьего задания',
                taskHandler: this.task2,
                taskVideo: require('../video/task3.mp4')
            })
        },

        render: function() {
            return (
                <div id="slide">
                    <video>
                        <source src={this.state.taskVideo} type="video/mp4" controls/>
                        Ваш браузер не поддерживает видео.
                    </video>
                    <div id="question">
                        <div>
                            {this.state.taskDescription}
                        </div>
                        <label>Ответ:</label><input type="text"/>
                        <button onClick={this.state.taskHandler}>Дальше</button>
                    </div>
                </div>
            );
        }
    });

    ReactDOM.render( <Block />,
        document.getElementById('content'));

};