using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebAPIFPGamesTournament.Controllers
{
    public class PageController : Controller
    {
        //  url/Page/GetPage
        public ActionResult GetPage()
        {
            return new FilePathResult("~/Views/Page/GetPage.html", "text/html");
        }

        //  url/Page/PostPage
        public ActionResult PostPage()
        {
            return new FilePathResult("~/Views/Page/PostPage.html", "text/html");
        }

        //  url/Page/PutDeletePage
        public ActionResult PutDeletePage()
        {
            return new FilePathResult("~/Views/Page/PutDeletePage.html", "text/html");
        }


        public ActionResult GetByJQuery()
        {
            return new FilePathResult("", "text/html");
        }

        public ActionResult PostByJQuery()
        {
            return new FilePathResult("", "text/html");
        }

        public ActionResult PutDeleteByJQuery()
        {
            return new FilePathResult("", "text/html");
        }
    }
}