var React = require('react');
var ReactDOM = require('react-dom');
var css = require('../css/main.css');

module.exports = function () {
    var Block = React.createClass({

        getInitialState: function() {
            return {
                taskDescription:'Вступление и переход к заданиям',
                taskHandler: this.intro,
                taskVideo: require('../video/intro.mp4')
            }
        },

        intro: function (event) {
            console.log('>> Переходим к заданиям...');
            this.setState({
                taskDescription: 'Задание №1: необходимо ответить на вопрос 111111',
                taskHandler: this.task1,
                taskVideo: require('../video/task1.mp4')
            });
        },

        task1: function(event) {
            console.log('>> Отвечаем на первое задание и пытаемся перейти к следующему заданию');
            this.setState({
                taskDescription: 'Задание №2: необходимо ответить на вопрос 2222',
                taskHandler: this.task2,
                taskVideo: require('../video/task2.mp4')
            })
        },

        task2: function(event) {
            console.log('>> Отвечаем на второе задание и пытаемся перейти к следующему заданию');
            this.setState({
                taskDescription: 'Задание №3: необходимо ответить на вопрос 3333',
                taskHandler: this.task3,
                taskVideo: require('../video/task3.mp4')
            })
        },

        task3: function(event) {
            console.log('>> Отвечаем на третье задание и пытаемся перейти к следующему заданию');
            this.setState({
                taskDescription: 'Задание №4: необходимо ответить на вопрос 4444',
                taskHandler: this.task4,
                taskVideo: require('../video/task4.mp4')
            })
        },


        task4: function(event) {
            console.log('>> Отвечаем на четвертое задание и пытаемся перейти к следующему заданию');
            this.setState({
                taskDescription: 'Задание №5: необходимо ответить на вопрос 5555',
                taskHandler: this.task5,
                taskVideo: require('../video/task5.mp4')
            })
        },

        task5: function(event) {
            console.log('>> Отвечаем на пятое задание и пытаемся перейти к следующему заданию');
            this.setState({
                taskDescription: 'Задание №6: необходимо ответить на вопрос 6666',
                taskHandler: this.task6,
                taskVideo: require('../video/task6.mp4')
            })
        },

        task6: function(event) {
            console.log('>> Отвечаем на последнее задание');
            this.setState({
                taskDescription: 'Спасибо Вы успешно справились со всеми заданиями',
                taskHandler: function () {
                    alert(1234);
                },
                taskVideo: 'stop'
            })
        },

        render: function() {
            return (
                <div id="slide">
                    <video autoPlay src={this.state.taskVideo}>
                        <source src={this.state.taskVideo} type="video/mp4"/>
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