describe("Rock-Paper-Scissors", function() {

  var player1, player2, game;

  beforeEach(function() {

    player1 = new Player();
    player2 = new Player();
    game = new Game(player1, player2);

  });

  describe('winning and losing', function() {

    describe('rock', function() {

      it('should beat scissors', function() {

        player1.picks('rock');
        player2.picks('scissors');
        expect(game.winner()).toBe(player1);
        expect(game.output()).toContain('Rock crushes scissors!');

      });

      it('should crush lizard', function() {

        player1.picks('rock');
        player2.picks('lizard');
        expect(game.winner()).toBe(player1);
        expect(game.output()).toContain('Rock crushes lizard!');
      
      });

      it('should lose to paper', function() {

        player1.picks('rock');
        player2.picks('paper');
        expect(game.winner()).toBe(player2);
        expect(game.output()).toContain('Paper covers rock!');

      });

      it('should be vaporised by Spock', function() {

        player1.picks('rock');
        player2.picks('spock');
        expect(game.winner()).toBe(player2);
        expect(game.output()).toContain('Spock vaporizes rock!');

      });

    });

    describe('paper', function() {

      it('should beat rock', function() {

        player1.picks('paper');
        player2.picks('rock');
        expect(game.winner()).toBe(player1);
        expect(game.output()).toContain('Paper covers rock!');

      });

      it('should beat spock', function() {

        player1.picks('paper');
        player2.picks('spock');
        expect(game.winner()).toBe(player1)
        expect(game.output()).toContain('Paper disproves spock!');

      });

      it('should lose to scissors', function() {

        player1.picks('paper');
        player2.picks('scissors');
        expect(game.winner()).toBe(player2);
        expect(game.output()).toContain('Scissors cuts paper!');

      });

      it('should loose to lizard', function() {

        player1.picks('paper');
        player2.picks('lizard');
        expect(game.winner()).toBe(player2);
        expect(game.output()).toContain('Lizard eats paper!');

      });

    });

    describe('scissors', function() {

      it('should beat paper', function() {

        player1.picks('scissors');
        player2.picks('paper');
        expect(game.winner()).toBe(player1);
        expect(game.output()).toContain('Scissors cuts paper!');

      });

      it('should decapitate lizard', function() {

        player1.picks('scissors');
        player2.picks('lizard');
        expect(game.winner()).toBe(player1);
        expect(game.output()).toContain('Scissors decapitates lizard!');

      })

      it('should lose to rock', function() {

        player1.picks('scissors');
        player2.picks('rock');
        expect(game.winner()).toBe(player2);
        expect(game.output()).toContain('Rock crushes scissors!');

      });

      it('should lose to spock', function() {

        player1.picks('scissors');
        player2.picks('spock');
        expect(game.winner()).toBe(player2);
        expect(game.output()).toContain('Spock smashes scissors!')
      
      });

    });

    describe('lizard', function() {

      it('should beat paper', function() {

        player1.picks('lizard');
        player2.picks('paper');
        expect(game.winner()).toBe(player1);
        expect(game.output()).toContain('Lizard eats paper!');

      });

      it('should beat spock', function() {

        player1.picks('lizard');
        player2.picks('spock');
        expect(game.winner()).toBe(player1);
        expect(game.output()).toContain('Lizard poisons spock!');

      });

      it('should lose to scissors', function() {

        player1.picks('lizard');
        player2.picks('scissors');
        expect(game.winner()).toBe(player2);
        expect(game.output()).toContain('Scissors decapitates lizard!');

      });

      it('should lose to rock', function() {

        player1.picks('lizard');
        player2.picks('rock');
        expect(game.winner()).toBe(player2);
        expect(game.output()).toContain('Rock crushes lizard!');

      });

    });

    describe('spock', function() {

      it('should beat scissors', function() {

        player1.picks('spock');
        player2.picks('scissors');
        expect(game.winner()).toBe(player1);
        expect(game.output()).toContain('Spock smashes scissors!');

      });

      it('should beat rock', function() {

        player1.picks('spock');
        player2.picks('rock');
        expect(game.winner()).toBe(player1);
        expect(game.output()).toContain('Spock vaporizes rock!');

      });

      it('should lose to paper', function() {

        player1.picks('spock');
        player2.picks('paper');
        expect(game.winner()).toBe(player2);
        expect(game.output()).toContain('Paper disproves spock!');

      });

      it('should lose to lizard', function() {

        player1.picks('spock');
        player2.picks('lizard');
        expect(game.winner()).toBe(player2);
        expect(game.output()).toContain('Lizard poisons spock!');

      });

    });

  });

  describe('draws', function() {

    describe('any identical picks', function() {

      it('should result in no winner', function() {

        var drawGameResults = ['rock', 'paper', 'scissors'].map(function(x) {
          player1.picks(x);
          player2.picks(x);
          return game.winner();
        });

        expect(drawGameResults).toEqual([null, null, null]);

      });

    });

  });

});