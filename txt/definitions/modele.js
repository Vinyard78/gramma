{
	"orthographe": "(.*?)",
	"proprietes":
		[
			{
				"variantes":
					[
						{
							"adresse":
								[
									{
										"valeur": "(.*?)",
										"genre": "(.*?)",
										"nombre": "(.*?)",
										"origine": "(.*?)",
										"remarque":
											[
												"(.*?)",
												...
											],
										"abreviation":
											[
												{
													"valeur": "(.*?)",
													"remarque":
														[
															"(.*?)",
															...
														]
												},
												...
											]
									},
									...
								],
							"catgram": "(.*?)",
							"origine": "(.*?)"
						},
						...
					],
				"catgram": "(.*?)",
				"origine": "(.*?)"
			},
			...
		],
	"textePresentatif": "(.*?)",
	"remarque": 
		[
			"(.*?)",
			...
		],
	"indicateurDefinition":
		[
			"(.*?)",
			...
		],
	"origine": "(.*?)",
	"definitions":
		[
			{
				"indicateurDefinition":
					[
						"(.*?)",
						...
					],
				"textePresentatif": "(.*?)",
				"division":
					[
						{
							"rubrique": "(.*?)",
							"sousDivision":
								[
									{
										"contenu": 
											[
												{
													"texte": "(.*?)"
												}
											]
									},
									...
								],
							"contenu": 
								[
									{
										"texte": "(.*?)",
										"images":
											[
												"(.*?).gif",
												...
											],
										"exemples":
											[
												"(.*?)",
												...
											]
									},
									...
								],
							"abreviation":
								[
									{
										"valeur": "(.*?)",
										"remarque": 
											[
												"(.*?)",
												...
											]
									},
									...
								],
							"remarque":
								[
									"(.*?)",
									...
								],
							"indicateurDefinition":
								[
									"(.*?)",
									...
								]
						},
						...
					]
			},
			...
		]
}