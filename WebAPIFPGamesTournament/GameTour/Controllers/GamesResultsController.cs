using DbConection1;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace GameTour.Controllers
{
    public class GamesResultsController : ApiController
    {
        // GET api/GamesResults
        public HttpResponseMessage Get()
        {
            using(WebAPI_FP_TournamentGamesEntities entities = new WebAPI_FP_TournamentGamesEntities())
            {
                return Request.CreateResponse(HttpStatusCode.OK, entities.GamesResults.ToList());
            }
        }

        // GET api/GamesResults/5
        public HttpResponseMessage Get(int id)
        {
            using (WebAPI_FP_TournamentGamesEntities entities = new WebAPI_FP_TournamentGamesEntities())
            {
                GamesResult game = entities.GamesResults.FirstOrDefault(t => t.ID == id);
                if (game != null)
                    return Request.CreateResponse(HttpStatusCode.OK, game);
                else
                    return Request.CreateResponse(HttpStatusCode.NotFound, string.Format("Game with id : {0} , NOT FOUND!!!", id));
            }
        }

        // POST api/GamesResults
        public HttpResponseMessage Post([FromBody]GamesResult gameRes)
        {
            using (WebAPI_FP_TournamentGamesEntities entities = new WebAPI_FP_TournamentGamesEntities())
            {
                entities.GamesResults.Add(gameRes);
                entities.SaveChanges();
                    return Request.CreateResponse(HttpStatusCode.Created, new Uri(Request.RequestUri + gameRes.ID.ToString()));
            }
        }

        // PUT api/GamesResults/5
        public HttpResponseMessage Put(int id, [FromBody]GamesResult game)
        {
            using (WebAPI_FP_TournamentGamesEntities entities = new WebAPI_FP_TournamentGamesEntities())
            {
                GamesResult gameUpdate = entities.GamesResults.FirstOrDefault(t => t.ID == id);
                if (gameUpdate != null)
                {
                    gameUpdate.Game_Name = game.Game_Name;
                    gameUpdate.Player1 = game.Player1;
                    gameUpdate.Player2 = game.Player2;
                    gameUpdate.Who_Won_ = game.Who_Won_;
                    entities.SaveChanges();
                    return Request.CreateResponse(HttpStatusCode.Accepted, gameUpdate);
                }
                else
                    return Request.CreateResponse(HttpStatusCode.NotFound, string.Format("Game with id : {0} , NOT FOUND!!!", id));
            }
        }

        // DELETE api/GamesResults/5
        public HttpResponseMessage Delete(int id)
        {
            using (WebAPI_FP_TournamentGamesEntities entities = new WebAPI_FP_TournamentGamesEntities())
            {
                GamesResult game = entities.GamesResults.FirstOrDefault(t => t.ID == id);
                if (game != null)
                {
                    entities.GamesResults.Remove(game);
                    entities.SaveChanges();
                    return Request.CreateResponse(HttpStatusCode.Accepted, string.Format("Game with id: {0} , was deleted.",id));
                }
                else
                    return Request.CreateResponse(HttpStatusCode.NotFound, string.Format("Game with id : {0} , NOT FOUND!!!", id));
            }
        }
        // GET by Player name
        [Route("api/GamesResults/Player/{playerName}")]
        public HttpResponseMessage GetByPlayerName(string playerName)
        {
            using (WebAPI_FP_TournamentGamesEntities entities = new WebAPI_FP_TournamentGamesEntities())
            {

                List<GamesResult> gameList = (entities.GamesResults.Where(t => ((t.Player1.ToUpper() == playerName.ToUpper()) ||
                                                                            (t.Player2.ToUpper() == playerName.ToUpper())))).ToList();
                if (gameList.Count > 0)
                    return Request.CreateResponse(HttpStatusCode.OK, gameList);
                else
                    return Request.CreateResponse(HttpStatusCode.NotFound, string.Format("Game with id : {0} , NOT FOUND!!!", playerName));
            }
        }

        // GET by Player name
        [Route("api/GamesResults/Search")]
        public HttpResponseMessage GetBySearch(string gameName = null, string player1Name = null, string player2Name = null, string whoWon = null)
        {
            using (WebAPI_FP_TournamentGamesEntities entities = new WebAPI_FP_TournamentGamesEntities())
            {

                List<GamesResult> gameList = entities.GamesResults.Where(t => gameName != null ? t.Game_Name.ToUpper().Contains(gameName.ToUpper()) : true)
                                             .Where(t => player1Name != null ? t.Player1.ToUpper().Contains(player1Name.ToUpper()) : true)
                                             .Where(t => player2Name != null ? t.Player2.ToUpper().Contains(player2Name.ToUpper()) : true)
                                             .Where(t => whoWon != null ? t.Who_Won_.ToUpper().Contains(whoWon.ToUpper()) : true).ToList();
                if (gameList.Count > 0)
                    return Request.CreateResponse(HttpStatusCode.OK, gameList);
                else
                    return Request.CreateResponse(HttpStatusCode.NotFound, string.Format("Game with wished fields NOT FOUND!!!"));
            }
        }
    }
}
