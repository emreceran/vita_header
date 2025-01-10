# -*- coding: utf-8 -*-
# from odoo import http


# class VitaHeader(http.Controller):
#     @http.route('/vita_header/vita_header', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/vita_header/vita_header/objects', auth='public')
#     def list(self, **kw):
#         return http.request.render('vsdsdita_header.listing', {
#             'root': '/vita_header/vita_header',
#             'objects': http.request.env['vita_header.vita_header'].search([]),
#         })

#     @http.route('/vita_header/vita_header/objects/<model("vita_header.vita_header"):obj>', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('vita_header.object', {
#             'object': obj
#         })

