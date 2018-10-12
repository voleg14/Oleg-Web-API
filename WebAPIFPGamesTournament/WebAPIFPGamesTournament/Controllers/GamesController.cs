using System;
using System.Collections.Generic;
using System.Data.Entity.Validation;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DbConection;
using Swashbuckle.Swagger;

namespace WebAPIFPGamesTournament.Controllers
{
    public class GamesController : ApiController
    {
        // GET api/Games
        public HttpResponseMessage Get()
        {
            using(WebAPI_FP_TournamentGamesEntities entities = new WebAPI_FP_TournamentGamesEntities())
            {
                return Request.CreateResponse(HttpStatusCode.OK, entities.GamesResoluts.ToList());
            }
        }

        // GET api/Games/5
        public HttpResponseMessage Get(int id)
        {
            using (WebAPI_FP_TournamentGamesEntities entities = new WebAPI_FP_TournamentGamesEntities())
            {
                GamesResolut wanted = entities.GamesResoluts.FirstOrDefault(t => t.ID == id);
                if (wanted != null)
                    return Request.CreateResponse(HttpStatusCode.OK, wanted);
                else
                    return Request.CreateResponse(HttpStatusCode.NotFound, string.Format("The game with id: {0} not found",id));              
            }
        }

        // POST api/Games
        public HttpResponseMessage Post([FromBody]GamesResolut value)
        {
            using (WebAPI_FP_TournamentGamesEntities entities = new WebAPI_FP_TournamentGamesEntities())
            {
                entities.GamesResoluts.Add(value);
                entities.SaveChanges();
                return Request.CreateResponse(HttpStatusCode.Created, new Uri(Request.RequestUri + value.ID.ToString()));
            }
        }

        // PUT api/Games/5
        public HttpResponseMessage Put(int id, [FromBody]GamesResolut value)
        {
            using (WebAPI_FP_TournamentGamesEntities entities = new WebAPI_FP_TournamentGamesEntities())
            {
                GamesResolut wanted = entities.GamesResoluts.FirstOrDefault(t => t.ID == id);
                if (wanted != null)
                {
                    wanted.Game_Name = value.Game_Name;
                    wanted.Player1 = value.Player1;
                    wanted.Player2 = value.Player2;
                    wanted.Who_Won_ = value.Who_Won_;
                    //entities.SaveChanges();
                    try
                    {
                        //db.SaveChanges();
                        entities.SaveChanges();
                    }
                    catch (DbEntityValidationException ex)
                    {
                        Console.WriteLine(ex);
                    }
                    return Request.CreateResponse(HttpStatusCode.Accepted, wanted);
                }
                else
                    return Request.CreateResponse(HttpStatusCode.NotFound, string.Format("The game with id: {0} not found", id));
            }
        }

        // DELETE api/Games/5
        public HttpResponseMessage Delete(int id)
        {
            using (WebAPI_FP_TournamentGamesEntities entities = new WebAPI_FP_TournamentGamesEntities())
            {
                GamesResolut wanted = entities.GamesResoluts.FirstOrDefault(t => t.ID == id);
                if (wanted != null)
                {
                    entities.GamesResoluts.Remove(wanted);
                    entities.SaveChanges();
                    return Request.CreateResponse(HttpStatusCode.Accepted, string.Format("The game with id: {0} deleted", id));
                }
                else
                    return Request.CreateResponse(HttpStatusCode.NotFound, string.Format("The game with id: {0} not found", id));
            }
        }

        // GET api/Games/playerName/oleg
        [Route("api/Games/playerName/{name}")]
        [HttpGet]
        public HttpResponseMessage GetByName(string name)
        {
            using (WebAPI_FP_TournamentGamesEntities entities = new WebAPI_FP_TournamentGamesEntities())
            {
                List<GamesResolut> wanted = entities.GamesResoluts.Where(t => (t.Player1.ToUpper() == name.ToUpper()) || (t.Player2.ToUpper() == name.ToUpper())).ToList();
                if (wanted.Count > 0)
                    return Request.CreateResponse(HttpStatusCode.OK, wanted);
                else
                    return Request.CreateResponse(HttpStatusCode.NotFound, string.Format("The game with Player: {0} not found", name));
            }
        }

        // GET api/Games/search
        [Route("api/Games/search")]
        [HttpGet]
        public HttpResponseMessage Get(int id = -1, string gameName = null, string player1 = null, string player2 = null, string whoWon = null)
        {
            using (WebAPI_FP_TournamentGamesEntities entities = new WebAPI_FP_TournamentGamesEntities())
            {
                List<GamesResolut> wanted = entities.GamesResoluts.Where(t => id != -1 ? t.ID == id : true)
                    .Where(t => gameName != null ? t.Game_Name.ToUpper() == gameName.ToUpper() : true)
                    .Where(t => player1 != null ? t.Player1.ToUpper() == player1.ToUpper() : true)
                    .Where(t => player2 != null ? t.Player2.ToUpper() == player2.ToUpper() : true)
                    .Where(t => whoWon != null ? t.Who_Won_.ToUpper() == whoWon.ToUpper() : true).ToList();
                if (wanted != null)
                    return Request.CreateResponse(HttpStatusCode.OK, wanted);
                else
                    return Request.CreateResponse(HttpStatusCode.NotFound, "The game not found");
            }
        }
    }
}
