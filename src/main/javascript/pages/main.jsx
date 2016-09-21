var React = require('react');
var ReactDOM = require('react-dom');
var css = require('../css/main.css');

module.exports = function () {
    var Block = React.createClass({

        getInitialState: function () {
            return {
                pageId: 0,
                taskDescription: 'Ну, что Вы готовы?',
                taskHandler: this.intro,
                taskVideo: require('../video/intro.mp4'),
                showVideo: 'show',
                showQuestion: 'notShow',
                button: 'Йо-Xo-Xo'
            }
        },

        componentDidMount: function () {
        },

        intro: function (event) {
            console.log('>> Переходим к заданиям...');

            this.setState({
                showVideo: 'show',
                showQuestion: 'notShow',
                taskDescription: 'Вот мое первое задание на проверку твоей пиратской сноровки, и я посмотрю, хватит ли у тебя сил на поиски сокровищ. ' +
                'Ты должен ТОЧНО посчитать, сколько ступенек в твоем доме. И это число будет первой частью кода. ' +
                'Вторая часть кода  это количество черных меток на приглашении, внизу которого изображены ШТУРВАЛ, ЧЕРЕП, ЯКОРЬ. ' +
                'Соедини два этих числа и ты получишь код, который и будет ответом на это задание',
                taskHandler: this.task1,
                taskVideo: require('../video/task1.mp4'),
                button: 'Дальше'
            });
        },

        task1: function (event) {
            console.log('>> Отвечаем на первое задание и пытаемся перейти к следующему заданию');
            this.setState({
                showVideo: 'show',
                showQuestion: 'notShow',
                taskDescription: 'Молодец, правильно! Вот тебе номер +375-297-23-18-05, позвони по нему и спроси Одноглазого ДЖО. ' +
                'Он-то и скажет тебе, где спрятана первая часть карты.',
                taskHandler: this.task2,
                taskVideo: require('../video/task2.mp4')
            })
        },

        task2: function (event) {
            console.log('>> Отвечаем на второе задание и пытаемся перейти к следующему заданию');
            this.setState({
                showVideo: 'show',
                showQuestion: 'notShow',
                taskDescription: 'Задание №3: необходимо ответить на вопрос 3333',
                taskHandler: this.task3,
                taskVideo: require('../video/task3.mp4')
            })
        },

        task3: function (event) {
            console.log('>> Отвечаем на третье задание и пытаемся перейти к следующему заданию');
            this.setState({
                showVideo: 'show',
                showQuestion: 'notShow',
                taskDescription: 'Задание №4: необходимо ответить на вопрос 4444',
                taskHandler: this.task4,
                taskVideo: require('../video/task4.mp4')
            })
        },


        task4: function (event) {
            console.log('>> Отвечаем на четвертое задание и пытаемся перейти к следующему заданию');
            this.setState({
                showVideo: 'show',
                showQuestion: 'notShow',
                taskDescription: 'Задание №5: необходимо ответить на вопрос 5555',
                taskHandler: this.task5,
                taskVideo: require('../video/task5.mp4')
            })
        },

        task5: function (event) {
            console.log('>> Отвечаем на пятое задание и пытаемся перейти к следующему заданию');
            this.setState({
                showVideo: 'show',
                showQuestion: 'notShow',
                taskDescription: 'Задание №6: необходимо ответить на вопрос 6666',
                taskHandler: this.task6,
                taskVideo: require('../video/task6.mp4')
            })
        },

        task6: function (event) {
            console.log('>> Отвечаем на последнее задание');
            this.setState({
                showVideo: 'show',
                showQuestion: 'notShow',
                taskDescription: 'Спасибо Вы успешно справились со всеми заданиями',
                taskHandler: function () {
                    alert(1234);
                },
                taskVideo: 'stop'
            })
        },

        videoEnded: function () {
            console.log(">> Закончено видео на странице:" + this.state.pageId);
            this.setState({
                showVideo: 'notShow',
                showQuestion: 'show'
            });
        },

        videoHandler: function (video) {
            video.addEventListener("ended", this.videoEnded);
        },

        render: function () {
            return (
                <div id="slide">
                    <video id="video" autoPlay src={this.state.taskVideo} controls ref={this.videoHandler}
                           className={this.state.showVideo}>
                        <source src={this.state.taskVideo} type="video/mp4"/>
                        Ваш браузер не поддерживает видео.
                    </video>
                    <div id="question" className={this.state.showQuestion}>
                        <br/>
                        <div>
                            {this.state.taskDescription}
                        </div>
                        <label>Ответ:</label><input type="text"/>
                        <button onClick={this.state.taskHandler}>{this.state.button}</button>
                    </div>
                </div>
            );
        }
    });

    ReactDOM.render(<Block />,
        document.getElementById('content'));

};