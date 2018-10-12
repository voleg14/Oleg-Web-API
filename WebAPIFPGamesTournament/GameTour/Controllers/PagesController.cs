using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace GameTour.Controllers
{
    public class PagesController : Controller
    {
        // http://localhost:50168/Pages/GetPage/
        public ActionResult GetPage()
        {
            return new FilePathResult("~/Views/Pages/GetPage.html", "text/html");
        }

        // http://localhost:50168/Pages/PostPage/
        public ActionResult PostPage()
        {
            return new FilePathResult("~/Views/Pages/PostPage.html", "text/html");
        }

        // http://localhost:50168/Pages/PutDeletePage/
        public ActionResult PutDeletePage()
        {
            return new FilePathResult("~/Views/Pages/PutDeletePage.html", "text/html");
        }

        // http://localhost:50168/Pages/GetJQueryPage/
        public ActionResult GetJQueryPage()
        {
            return new FilePathResult("~/Views/Pages/GetJQueryPage.html", "text/html");
        }

        // http://localhost:50168/Pages/PostJQueryPage/
        public ActionResult PostJQueryPage()
        {
            return new FilePathResult("~/Views/Pages/PostJQueryPage.html", "text/html");
        }

        // http://localhost:50168/Pages/PutDeleteJQueryPage/
        public ActionResult PutDeleteJQueryPage()
        {
            return new FilePathResult("~/Views/Pages/PutDeleteJQueryPage.html", "text/html");
        }

        // http://localhost:50168/Pages/ObservablePage/
        public ActionResult ObservablePage()
        {
            return new FilePathResult("~/Views/Pages/ObservablePage.html", "text/html");
        }
    }
}